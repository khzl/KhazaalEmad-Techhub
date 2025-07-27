import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Pagination,
  Stack,
  CircularProgress
} from '@mui/material';


function Post({ post }) {
   return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description || post.body}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          By: {post.user?.name || post.author} | ❤️ {post.positive_reactions_count}
        </Typography>
      </CardContent>
    </Card>
  );
}


function App() {
  const [posts, setPosts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [loading, setLoading] = useState(true); 
  const postsPerPage = 10; 

  
  useEffect(() => {
    fetch('https://dev.to/api/articles')
      .then(res => res.json()) 
      .then(data => {
        setPosts(data); 
        setLoading(false); 
      })
      .catch(err => {
        console.error("Failed To Fetch posts:" , err);
        setLoading(false);
      });
  }, []);

  const indexLast = currentPage * postsPerPage;       
  const indexFirst = indexLast - postsPerPage;        
  const currentPosts = posts.slice(indexFirst, indexLast); 

  const totalPages = Math.ceil(posts.length / postsPerPage); 
  
  const handlePageChange = (event, value) => {
    setCurrentPage(value); 
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Programming & Tech Articles
      </Typography>

      {loading ? (
        <Stack alignItems="center" mt={5}>
          <CircularProgress />
        </Stack>
      ) : (
        <>
          <Grid container spacing={3}>
            {currentPosts.map(post => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Post post={post} />
              </Grid>
            ))}
          </Grid>

          <Stack spacing={2} alignItems="center" mt={4}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </>
      )}
    </Container>
  );
}

export default App;
