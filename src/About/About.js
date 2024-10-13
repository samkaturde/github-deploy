import React from "react";
import {
  Container,
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurExcellence from "./../Slider/OurExcellence";

// Custom styles for the hero section
const HeroSection = styled(Box)({
  backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)", // Added overlay for better contrast
  },
});

const HeroText = styled(Typography)({
  zIndex: 1, // Ensures text is above the overlay
  fontWeight: "bold",
  fontSize: "3rem",
});

const services = [
  {
    title: "Talent Acquisition",
    description:
      "We source and identify skilled professionals across various IT domains, including software development, data science, cybersecurity, cloud computing, and more.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    title: "Candidate Screening",
    description:
      "Every candidate undergoes a comprehensive vetting process, from technical assessments to cultural fit evaluations.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    title: "Employer Partnerships",
    description:
      "We collaborate closely with companies to understand their specific hiring needs, workplace culture, and long-term objectives.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    title: "Consulting and Advisory Services",
    description:
      "We offer consulting services to help businesses optimize their talent acquisition strategies.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    title: "Career Development for Candidates",
    description:
      "We offer career development advice, helping candidates navigate the evolving job market and enhance their skills.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

// Slider settings without arrows
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Styling for the cards in the slider
const StyledCard = styled(Card)({
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.08)",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f3f3f3", // Add gradient or alternate color
  },
  margin: "10px", // Spacing between cards
});

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <HeroText variant="h2" component="h1">
          About Us
        </HeroText>
      </HeroSection>

      {/* Mission Statement Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
              Our Mission
            </Typography>
            <Divider
              sx={{
                width: "100px",
                mx: "auto",
                mt: 2,
                mb: 4,
                height: "4px",
                backgroundColor: "#ff4081",
              }}
            />
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              Our mission is to foster a recruitment revolution that blends
              human insight with AI-driven precision. We are dedicated to helping
              companies not just find the right talent, but also create cultures
              that inspire innovation, inclusivity, and sustainability.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* What We Do Section with Enhanced Slider */}
      {/* <Box sx={{ py: 8, backgroundColor: "#e0f7fa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            What We Do
          </Typography>
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <Box key={index} px={2}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      height: 200,
                      borderRadius: "10px",
                      marginBottom: "15px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#666", mt: 1, fontSize: "0.95rem" }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box> */}

      <OurExcellence title="What We Do" content={services}/>

      {/* Company Values Section */}
      <Box sx={{ backgroundColor: "#fff", py: 6 }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Our Vision
            </Typography>
            <Divider
              sx={{
                width: "100px",
                mx: "auto",
                height: "4px",
                backgroundColor: "#ff4081",
                mb: 4,
              }}
            />
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              To be the pioneering force in shaping a global talent ecosystem where people, purpose, and progress align. Our vision is a world where recruitment is not transactional, but transformational.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
