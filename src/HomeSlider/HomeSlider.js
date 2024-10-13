import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Import fade effect
import { Autoplay, EffectFade } from 'swiper/modules'; // Import effect module

const SampleSlider = () => {
  const images = [
    {
      src: 'https://picsum.photos/1920/540?random=1',
      alt: 'Banner 1',
      title: 'Your Overlay Text Here',
      subtitle: 'Subtitle or additional information 1 Subtitle or additional information 1 Subtitle or additional information 1',
    },
    {
      src: 'https://picsum.photos/1920/540?random=2',
      alt: 'Banner 2',
      title: 'Your Overlay Text Here',
      subtitle: 'Subtitle or additional information 2',
    },
    {
      src: 'https://picsum.photos/1920/540?random=3',
      alt: 'Banner 3',
      title: 'Your Overlay Text Here',
      subtitle: 'Subtitle or additional information 3',
    },
  ];

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '50vh' }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }} // Auto-scroll configuration
        loop={true}
        modules={[Autoplay, EffectFade]} // Include the EffectFade module
        effect="fade" // Apply fade effect
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ textAlign: 'center', marginBottom: '2rem', height: '100%' }}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '200vw', // Full screen width
                  height: '50vh', // Set image height to half of the viewport height
                  objectFit: 'cover', // Ensure the image covers the area without distortion
                  borderRadius: '0', // Remove border radius for a full-width effect
                  marginLeft: 'calc(-50vw + 50%)', // Center the image for full-width appearance
                  maxWidth: 'none',
                  transition: 'opacity 0.5s ease-in-out', // Smooth transition effect
                }}
              />

              {/* Background Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                }}
              />

              {/* Text Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff', // White text color for contrast
                  textAlign: 'center',
                  padding: '0 10px', // Padding for text to avoid overlap on small screens
                }}
              >
                <Typography
                  variant={{ xs: 'h3', md: 'h3' }}
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '4rem', md: '4rem' },
                    background: 'linear-gradient(to right, #30cfd0 0%, #330867 100%)', // Gradient text
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', // Gradient text effect
                    animation: 'fadeIn 1.5s ease-in-out', // Fade-in animation for text
                  }}
                >
                  {image.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.5rem' },
                    marginTop: '0.5rem',
                    opacity: 0.9, // Slight opacity for subtitle
                    animation: 'fadeIn 2s ease-in-out', // Delay fade-in animation for subtitle
                  }}
                >
                  {image.subtitle}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SampleSlider;
