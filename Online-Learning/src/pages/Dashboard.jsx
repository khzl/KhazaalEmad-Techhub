import { Typography, Container, Button , Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Container 
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 2, sm: 4 },
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }, mb: 2 }}
      >
        Welcome, {user?.name}!
      </Typography>

      <Typography 
        sx={{ 
          mt: 1, 
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          maxWidth: "600px" 
        }}
      >
        Browse learning resources below and start your journey.
      </Typography>

      <Box sx={{ mt: 4, width: { xs: "100%", sm: "auto" } }}>
        <Button
          variant="contained"
          size="large"
          fullWidth={true}
          sx={{ px: { sm: 5, md: 7 }, py: { xs: 1.5, sm: 2 } }}
          onClick={() => navigate("/resources")}
        >
          Go To Resources
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
