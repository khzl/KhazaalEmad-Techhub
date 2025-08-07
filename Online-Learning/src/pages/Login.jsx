import { useState } from "react";
import{
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from 'react-router';
import { useAuth } from "../context/AuthContext";


function Login(){
    const [email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email,password)){
            navigate("/dashboard");
        }else{
            alert("Invalid login")
        }
    };

    return (
        <Container maxWidth="sm"
        sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Paper elevation={3} 
            sx={{ p: {xs: 3, sm: 5},
            width: "100%",
            maxWidth: 450,
            borderRadius: 3,
            }}>

                <Typography variant="h4" 
                textAlign={"center"} 
                gutterBottom
                sx={{ fontSize: {xs: "1.8rem", sm: "2.2rem"}}}>
                    Login
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>

                    <TextField
                    fullWidth 
                    label="Email" 
                    margin="normal"
                    value={email} 
                    onChange={(e) => SetEmail(e.target.value)}/>

                    <TextField 
                    fullWidth 
                    type="password" 
                    label="Password"
                    margin="normal"
                     value={password} onChange={(e) =>
                        SetPassword(e.target.value)}/>

                        <Button 
                        type="submit" 
                        variant="contained"
                        fullWidth 
                        sx={{ mt: 3,
                            py: {xs: 1.5, sm: 2},
                            fontSize: {xs: "0.9rem" , sm: "1rem"},
                        }}>
                            Sign In
                        </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login;