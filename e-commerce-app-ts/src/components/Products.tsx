import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Box,
  Chip,
  Pagination,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { ShoppingCart, Visibility, ViewModule, ViewList } from '@mui/icons-material';
import { productsAPI } from '../api/productsAPI';
import { cartAPI } from '../api/cartAPI';
import { ProductsGridSkeleton } from './SkeletonLoader';

interface Product {
  id: string;
  name?: string;
  title?: string;
  description?: string;
  price?: number | string;
  category?: string | { name: string };
  categoryName?: string;
  primaryImage?: string;
  image?: string;
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(6);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm && Array.isArray(products)) {
      const filtered = products.filter((product) => {
        const name = (product.name || product.title || '').toLowerCase();
        const description = (product.description || '').toLowerCase();
        const category =
          product.categoryName ||
          (product.category && typeof product.category === 'object'
            ? product.category.name
            : product.category) ||
          '';

        return (
          name.includes(searchTerm.toLowerCase()) ||
          category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          description.includes(searchTerm.toLowerCase())
        );
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(Array.isArray(products) ? products : []);
    }
    setCurrentPage(1);
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      const data = response.data;

      let productsData: Product[];

      if (data.data && data.data.data) {
        productsData = data.data.data;
      } else if (data.data) {
        productsData = data.data;
      } else {
        productsData = data;
      }

      setProducts(productsData);
      setFilteredProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product: Product) => {
    if (!product || !product.id) return;

    try {
      await cartAPI.add(product.id, 1);

      const cart: (Product & { quantity: number })[] = JSON.parse(
        localStorage.getItem('cart') || '[]'
      );
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error adding to cart:', error);
      try {
        const cart: (Product & { quantity: number })[] = JSON.parse(
          localStorage.getItem('cart') || '[]'
        );
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
      } catch (localStorageError) {
        console.error('Error with localStorage:', localStorageError);
      }
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil((filteredProducts?.length || 0) / productsPerPage);

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: 'grid' | 'list' | null
  ) => {
    if (newView !== null) setViewMode(newView);
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (loading) return <ProductsGridSkeleton count={6} />;

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Products ({filteredProducts?.length || 0} items)
        </Typography>

        <TextField
          fullWidth
          label="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <ToggleButtonGroup value={viewMode} exclusive onChange={handleViewChange} size="small">
            <ToggleButton value="grid" aria-label="Grid View">
              <ViewModule />
            </ToggleButton>
            <ToggleButton value="list" aria-label="List View">
              <ViewList />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <Grid container spacing={3}>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => {
                if (!product?.id) return null;

                return (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {product.primaryImage || product.image ? (
                        <CardMedia
                          component="img"
                          height="200"
                          image={product.primaryImage || product.image}
                          alt={product.name || product.title}
                          sx={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: '200px',
                            backgroundColor: 'grey.200',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'grey.600',
                            fontSize: '14px',
                          }}
                        >
                          No Image Available
                        </Box>
                      )}
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {(product.name || product.title || 'Unnamed Product').length > 50
                            ? `${(product.name || product.title)?.substring(0, 50)}...`
                            : product.name || product.title || 'Unnamed Product'}
                        </Typography>

                        <Chip
                          label={
                            product.categoryName ||
                            (product.category &&
                            typeof product.category === 'object'
                              ? product.category.name
                              : product.category) ||
                            'No Category'
                          }
                          size="small"
                          sx={{ mb: 1 }}
                        />

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {(product.description || 'No description available').length > 100
                            ? `${(product.description || '').substring(0, 100)}...`
                            : product.description || 'No description available'}
                        </Typography>

                        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                          ${product.price || '0.00'}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<Visibility />}
                            onClick={() => navigate(`/products/${product.id}`)}
                            sx={{ flex: 1 }}
                          >
                            View
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<ShoppingCart />}
                            onClick={() => addToCart(product)}
                            sx={{ flex: 1 }}
                          >
                            Add to Cart
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            ) : (
              <Grid item xs={12}>
                <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                  No products found
                </Typography>
              </Grid>
            )}
          </Grid>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <Stack spacing={3}>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => {
                if (!product?.id) return null;

                return (
                  <Grid item xs={12} key={product.id}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {product.primaryImage || product.image ? (
                        <CardMedia
                          component="img"
                          height="200"
                          image={product.primaryImage || product.image}
                          alt={product.name || product.title}
                          sx={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: '200px',
                            backgroundColor: 'grey.200',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'grey.600',
                            fontSize: '14px',
                          }}
                        >
                          No Image Available
                        </Box>
                      )}
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {(product.name || product.title || 'Unnamed Product').length > 50
                            ? `${(product.name || product.title)?.substring(0, 50)}...`
                            : product.name || product.title || 'Unnamed Product'}
                        </Typography>

                        <Chip
                          label={
                            product.categoryName ||
                            (product.category &&
                            typeof product.category === 'object'
                              ? product.category.name
                              : product.category) ||
                            'No Category'
                          }
                          size="small"
                          sx={{ mb: 1 }}
                        />

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {(product.description || 'No description available').length > 100
                            ? `${(product.description || '').substring(0, 100)}...`
                            : product.description || 'No description available'}
                        </Typography>

                        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                          ${product.price || '0.00'}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<Visibility />}
                            onClick={() => navigate(`/products/${product.id}`)}
                            sx={{ flex: 1 }}
                          >
                            View
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<ShoppingCart />}
                            onClick={() => addToCart(product)}
                            sx={{ flex: 1 }}
                          >
                            Add to Cart
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            ) : (
              <Grid item xs={12}>
                <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                  No products found
                </Typography>
              </Grid>
            )}
          </Stack>
        )}

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
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of{' '}
              {filteredProducts.length} products
            </Typography>
          </Stack>
        )}

        {filteredProducts.length === 0 && (
          <Typography variant="h6" align="center" sx={{ mt: 4 }}>
            No products found
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Products;
