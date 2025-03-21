import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

// Import images for logos
import img1 from "../assets/techstack/1.png";
import img2 from "../assets/techstack/2.png";
import img3 from "../assets/techstack/3.png";
import img4 from "../assets/techstack/4.png";
import img5 from "../assets/techstack/5.png";
import img6 from "../assets/techstack/6.png";
import img7 from "../assets/techstack/7.png";
import img8 from "../assets/techstack/8.png";
import img9 from "../assets/techstack/9.png";
import img10 from "../assets/techstack/10.png";
import img11 from "../assets/techstack/11.png";
import img12 from "../assets/techstack/12.png";
import img13 from "../assets/techstack/13.png";
import img14 from "../assets/techstack/14.png";
import img15 from "../assets/techstack/15.png";

const logos = [
  img1, img2, img3, img4, img5, img6, img7, img8, 
  img9, img10, img11, img12, img13, img14, img15,
];

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 0;
  background-color: transparent; /* Removed background color */
`;

const Image = styled.img`
  width: 50px; /* Adjust size as needed */
  height: auto;
  margin: 0 5px; /* Reduced spacing */
`;

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 10 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 8 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 6 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 4 },
};

function LogoSlider() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500} /* Adjust speed */
        transitionDuration={500} /* Smooth transition */
        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
        showDots={false} /* Removes slide buttons */
      >
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Logo ${index}`} />
        ))}
      </Carousel>
    </Container>
  );
}

export default LogoSlider;
