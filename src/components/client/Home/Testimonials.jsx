"use client";

import { Avatar, Box, Container, useMediaQuery } from "@mui/material";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import TestimonialCard from "material-testimonial-card";

import { Carousel } from "primereact/carousel";

const testimonialData = [
  {
    message:
      "I have spended a lot of times with Haris as he is my student, He is more than a developer with Multiple talent. His projects are professional and responsive. Further also he is cooperative person.",
    image: "/assets/maliksir.jpg",
    name: "Dr. Shahid Malik",
    title:
      "Assitant Professor, Computer Science Department, Karakoram International University",
  },
  {
    message:
      "Haris umar is very spiritual and highly confidential person. I loved their way of doing projects and works. Correct time, responsive, on time delivery person I really like it.",
    image: "/assets/zarnwabsir.jpg",
    name: "Dr. Zarnawab Khan",
    title:
      "Assoc. Professor & Chairman Computer Science Department, Karakoram International University",
  },
];

const Testimonials = () => {
  const matches = useMediaQuery("(max-width:600px)");

  const testimonialTemplate = (testimonial) => {
    return (
      <TestimonialCard
        name={testimonial.name}
        image={testimonial.image}
        content={testimonial.message}
        project={testimonial.title}
      />
    );
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        // ".p-carousel": {
        //   alignItems: "center",
        // },
        ".p-carousel-items-container": {
          alignItems: "center",
          gap: "2px",
        },
        ".p-carousel-item": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".jss1": {
          width: "100%",
        },
      }}
    >
      <Carousel
        value={testimonialData}
        itemTemplate={testimonialTemplate}
        circular
        autoplayInterval={3000}
        numVisible={1}
        numScroll={1}
        showNavigators={matches ? false : true}
      />
    </Container>
  );
};

export default Testimonials;
