import {
Container,
Grid,
Card,
CardContent,
Typography,
Button
} from "@mui/material";

const resources = [
    {id: 1, title: "JavaScript Basics" , type: "PDF",
    description: "Learn the Fundamentals Of JS."},
    {id: 2, title: "React Crash Course" , type: "Video",
    description: "Quick Start React Tutorial"},
    {id: 3, title: "Data Structure Guide" , type: "PDF",
    description: "Understand Core Data Structures"},
    ];


function Resources()
{
    return (
    <Container sx={{mt : 5}}>
        <Typography variant="h4" gutterBottom>
            Learning Resources
        </Typography>
        <Grid container spacing={3}>
            {resources.map((resources) => (
                <Grid item xs={12} sm={6} md={4} key={resources.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                {resources.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {resources.type} - {resources.description}
                            </Typography>
                            <Button variant="contained" sx={{ mt: 2}}>
                                View / DownLoad
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
    );
}

export default Resources;