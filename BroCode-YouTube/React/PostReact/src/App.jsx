import { useState, useEffect } from 'react';
import './App.css'

function Post({ post }) 
{
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);         
  const [currentPage, setCurrentPage] = useState(1); 
  const postsPerPage = 10;
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  
  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currentPosts = posts.slice(indexFirst, indexLast);

  
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="App">
      <h1>Posts</h1>

      <div className="posts-list">
        {currentPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <div className="pagination">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
