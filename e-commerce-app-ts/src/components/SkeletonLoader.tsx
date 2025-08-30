import { FC } from 'react';
import { Skeleton, Card, CardContent, Grid, Box, Container } from '@mui/material';

interface ProductsGridSkeletonProps {
  count?: number;
}

interface UserTableSkeletonProps {
  rows?: number;
}

interface CartSkeletonProps {
  items?: number;
}

// Product Card Skeleton
export const ProductCardSkeleton: FC = () => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Skeleton variant="rectangular" height={200} />
    <CardContent sx={{ flexGrow: 1 }}>
      <Skeleton variant="text" height={32} width="80%" />
      <Skeleton variant="rounded" height={24} width={80} sx={{ my: 1 }} />
      <Skeleton variant="text" height={20} width="100%" />
      <Skeleton variant="text" height={20} width="90%" />
      <Skeleton variant="text" height={20} width="70%" />
      <Skeleton variant="text" height={28} width={60} sx={{ mt: 2, mb: 2 }} />
      <Skeleton variant="rectangular" height={36} width="100%" />
    </CardContent>
  </Card>
);

// Products Grid Skeleton
export const ProductsGridSkeleton: FC<ProductsGridSkeletonProps> = ({ count = 6 }) => (
  <Container maxWidth="lg">
    <Box sx={{ my: 4 }}>
      <Skeleton variant="text" height={40} width={200} sx={{ mb: 3 }} />
      <Skeleton variant="rectangular" height={56} sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        {Array.from({ length: count }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

// User Table Skeleton
export const UserTableSkeleton: FC<UserTableSkeletonProps> = ({ rows = 5 }) => (
  <Container maxWidth="lg">
    <Box sx={{ my: 4 }}>
      <Skeleton variant="text" height={40} width={200} sx={{ mb: 3 }} />
      
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="text" width={100} height={24} />
            <Skeleton variant="text" width={120} height={24} />
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="text" width={100} height={24} />
          </Box>
          
          {Array.from({ length: rows }).map((_, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="text" width={120} height={24} />
              <Skeleton variant="text" width={180} height={24} />
              <Skeleton variant="text" width={80} height={24} />
              <Skeleton variant="text" width={100} height={24} />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  </Container>
);

// Cart Item Skeleton
export const CartItemSkeleton: FC = () => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Skeleton variant="text" height={28} width="70%" />
          <Skeleton variant="text" height={20} width="40%" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={30} height={24} sx={{ mx: 2 }} />
            <Skeleton variant="circular" width={32} height={32} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Skeleton variant="text" height={28} width="80%" />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Skeleton variant="circular" width={32} height={32} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

// Cart Skeleton
export const CartSkeleton: FC<CartSkeletonProps> = ({ items = 3 }) => (
  <Container maxWidth="md">
    <Box sx={{ my: 4 }}>
      <Skeleton variant="text" height={40} width={250} sx={{ mb: 3 }} />
      
      {Array.from({ length: items }).map((_, index) => (
        <CartItemSkeleton key={index} />
      ))}
      
      <Skeleton variant="rectangular" height={1} sx={{ my: 3 }} />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Skeleton variant="text" height={32} width={150} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Skeleton variant="rectangular" height={36} width={100} />
          <Skeleton variant="rectangular" height={36} width={140} />
        </Box>
      </Box>
    </Box>
  </Container>
);
