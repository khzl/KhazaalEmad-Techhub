import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Chip,
  Paper,
  IconButton,
  Card,
  CardMedia,
  Skeleton,
} from '@mui/material';
import { ShoppingCart, ArrowBack, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { productsAPI } from '../api/productsAPI';
import { productImagesAPI } from '../api/productImagesAPI';
import { cartAPI } from '../api/cartAPI';
import ImageWithFallback from './ImageWithFallback';

interface Product {
  id: string;
  name: string;
  price: number | string;
  discount?: number | string;
  stock: number;
  description?: string;
  category?: string | { name: string };
  categoryName?: string;
}

interface ProductImage {
  id: string;
  imageUrl?: string;
  url?: string;
  altText?: string;
  isPrimary?: boolean;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [images, setImages] = useState<ProductImage[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProduct();
      fetchProductImages();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getById(id);
      const data = response.data;

      let productData: Product;
      if (data.data) {
        productData = data.data;
      } else {
        productData = data;
      }

      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError('Product not found');
    } finally {
      setLoading(false);
    }
  };

  const fetchProductImages = async () => {
    try {
      setImageLoading(true);
      const response = await productImagesAPI.getByProductId(id);
      const data = response.data;

      let imagesData: ProductImage[];
      if (data.data && data.data.data) {
        imagesData = data.data.data;
      } else if (data.data) {
        imagesData = data.data;
      } else {
        imagesData = data;
      }

      const imagesList = Array.isArray(imagesData) ? imagesData : [];
      const sortedImages = imagesList.sort((a, b) => {
        if (a.isPrimary && !b.isPrimary) return -1;
        if (!a.isPrimary && b.isPrimary) return 1;
        return 0;
      });

      setImages(sortedImages);
    } catch (error) {
      console.error('Error fetching product images:', error);
      setImages([]);
    } finally {
      setImageLoading(false);
    }
  };

  const addToCart = async () => {
    if (!product) return;

    try {
      await cartAPI.add(product.id, 1);

      const cart: (Product & { quantity: number })[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('Added to cart successfully');
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Fallback to localStorage only
      try {
        const cart: (Product & { quantity: number })[] = JSON.parse(localStorage.getItem('cart') || '[]');
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

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={400} />
          <Skeleton variant="text" sx={{ fontSize: '2rem', mt: 2 }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', mt: 1 }} />
          <Skeleton variant="text" width="60%" sx={{ mt: 1 }} />
        </Box>
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {error || 'Product not found'}
          </Typography>
          <Button variant="contained" onClick={() => navigate('/products')} startIcon={<ArrowBack />}>
            Back to Products
          </Button>
        </Box>
      </Container>
    );
  }

  const selectedImage = images[selectedImageIndex];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/products')} sx={{ mb: 3 }}>
          Back to Products
        </Button>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box sx={{ position: 'relative', mb: 2 }}>
                {selectedImage ? (
                  <img
                    src={selectedImage.imageUrl || selectedImage.url}
                    alt={selectedImage.altText || product.name}
                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                ) : (
                  <ImageWithFallback
                    src=""
                    alt={product.name}
                    width="100%"
                    height="400px"
                    fallbackText="No Image Available"
                    style={{ borderRadius: '8px' }}
                  />
                )}

                {images.length > 1 && (
                  <>
                    <IconButton
                      onClick={prevImage}
                      sx={{
                        position: 'absolute',
                        left: 8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                      }}
                    >
                      <NavigateBefore />
                    </IconButton>
                    <IconButton
                      onClick={nextImage}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                      }}
                    >
                      <NavigateNext />
                    </IconButton>
                  </>
                )}
              </Box>

              {images.length > 1 && (
                <Grid container spacing={1}>
                  {images.map((image, index) => (
                    <Grid size={{ xs: 3 }} key={image.id || index}>
                      <Card
                        sx={{
                          cursor: 'pointer',
                          border: selectedImageIndex === index ? 2 : 0,
                          borderColor: 'primary.main',
                        }}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <CardMedia
                          component="img"
                          height="80"
                          image={image.imageUrl || image.url}
                          alt={image.altText}
                          sx={{ objectFit: 'cover' }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h4" gutterBottom>
                {product.name || 'Unnamed Product'}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Chip
                  label={
                    product.categoryName ||
                    (product.category && typeof product.category === 'object'
                      ? product.category.name
                      : product.category) ||
                    'No Category'
                  }
                  color="primary"
                  variant="outlined"
                />
              </Box>

              <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                ${product.price || '0.00'}
                {product.discount && product.discount > 0 && (
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ ml: 2, textDecoration: 'line-through', color: 'text.secondary' }}
                  >
                    ${((parseFloat(product.price as string) || 0) + (parseFloat(product.discount as string) || 0)).toFixed(2)}
                  </Typography>
                )}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 4 }}>
                {product.description || 'No description available.'}
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                onClick={addToCart}
                disabled={product.stock === 0}
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;
