import { useState, useEffect, useCallback} from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Snackbar,
  Pagination,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Add, Edit, Delete } from "@mui/icons-material";
import { categoriesAPI } from "../api/categoriesAPI";

// ✅ Define types
interface Category {
  id: number;
  name: string;
  createdAt?: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

interface FormData {
  name: string;
}

const AdminCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [itemsPerPage] = useState<number>(10);
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });

  const showSnackbar = (message: string, severity: SnackbarState["severity"] = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const fetchCategories = useCallback(
    async (page: number = 1) => {
      try {
        setLoading(true);
        const response = await categoriesAPI.getAll({
          page,
          limit: itemsPerPage,
        });

        const data = response.data.data;

        if (data.data) {
          setCategories(Array.isArray(data.data) ? data.data : []);
          setTotalCount(data.total || data.data.length);
          setTotalPages(Math.ceil((data.total || data.data.length) / itemsPerPage));
        } else {
          setCategories(Array.isArray(data) ? data : []);
          setTotalCount(data.length);
          setTotalPages(1);
        }
      } catch (error: any) {
        console.error("Error fetching categories:", error);
        setCategories([]);
        showSnackbar("Error fetching categories", "error");
      } finally {
        setLoading(false);
      }
    },
    [itemsPerPage]
  );

  useEffect(() => {
    fetchCategories(currentPage);
  }, [fetchCategories, currentPage]);

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleOpenDialog = (category: Category | null = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name || "",
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingCategory(null);
    setFormData({ name: "" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      showSnackbar("Please enter a category name", "error");
      return;
    }

    try {
      const categoryData = { name: formData.name.trim() };

      if (editingCategory) {
        await categoriesAPI.update(editingCategory.id, categoryData);
        showSnackbar("Category updated successfully");
      } else {
        await categoriesAPI.create(categoryData);
        showSnackbar("Category created successfully");
      }

      fetchCategories(currentPage);
      handleCloseDialog();
    } catch (error: any) {
      console.error("Error saving category:", error);
      showSnackbar(
        `Error saving category: ${error.response?.data?.message || error.message}`,
        "error"
      );
    }
  };

  const handleDelete = async (id: number) => {
    if (!id) {
      showSnackbar("Invalid category ID", "error");
      return;
    }

    if (
      window.confirm(
        "Are you sure you want to delete this category? This action cannot be undone."
      )
    ) {
      try {
        await categoriesAPI.delete(id);
        showSnackbar("Category deleted successfully");

        if (categories.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          fetchCategories(currentPage);
        }
      } catch (error: any) {
        console.error("Error deleting category:", error);
        showSnackbar(
          `Error deleting category: ${error.response?.data?.message || error.message}`,
          "error"
        );
      }
    }
  };

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  if (loading && categories.length === 0) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4">Loading...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">
            Category Management ({totalCount} categories)
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => handleOpenDialog()}
          >
            Add Category
          </Button>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>{category.name || "No name"}</TableCell>
                    <TableCell>
                      {category.createdAt
                        ? new Date(category.createdAt).toLocaleDateString()
                        : "No date"}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleOpenDialog(category)}
                        color="primary"
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(category.id)}
                        color="error"
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    {loading ? "Loading categories..." : "No categories found"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        {totalPages > 1 && (
          <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
            <Typography variant="body2" color="text.secondary">
              Showing page {currentPage} of {totalPages} ({totalCount} total
              categories)
            </Typography>
          </Stack>
        )}

        {/* Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <form onSubmit={handleSubmit}>
            <DialogTitle>
              {editingCategory ? "Edit Category" : "Add New Category"}
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    label="Category Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button type="submit" variant="contained">
                {editingCategory ? "Update" : "Create"}
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default AdminCategories;
