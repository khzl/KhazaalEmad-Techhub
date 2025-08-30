import { useState, CSSProperties, ImgHTMLAttributes } from 'react';
import { Box } from '@mui/material';

interface ImageWithFallbackProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  fallbackText?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width = 50,
  height = 50,
  style = {},
  fallbackText = 'No Image',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (!src || hasError) {
    return (
      <Box
        sx={{
          width,
          height,
          backgroundColor: 'grey.200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          fontSize: Math.min(width, height) * 0.2 + 'px',
          color: 'grey.600',
          textAlign: 'center',
          ...style,
        }}
        {...props}
      >
        {fallbackText}
      </Box>
    );
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          objectFit: 'cover',
          borderRadius: '4px',
          display: isLoading ? 'none' : 'block',
          ...style,
        }}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
      {isLoading && (
        <Box
          sx={{
            width,
            height,
            backgroundColor: 'grey.100',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            fontSize: Math.min(width, height) * 0.15 + 'px',
            color: 'grey.500',
          }}
        >
          Loading...
        </Box>
      )}
    </>
  );
};

export default ImageWithFallback;
