import ReactImageGallery from "react-image-gallery";
import { Fade } from "react-slideshow-image";
import "react-image-gallery/styles/css/image-gallery.css";
import { Box } from "@mui/material";

const Slideshow = () => {
  const images = [
    {
      original: "images/food/1.png",
    },
    {
      original: "images/food/2.png",
    },
    {
      original: "images/food/3.png",
    },
  ];

  const fadeProps = {
    indicators: true,
    arrows: false,
    duration: 2000,
  };

  return (
    <Box borderRadius={4} overflow="hidden">
      <ReactImageGallery
        showBullets={true}
        infinite
        autoPlay
        slideDuration={2000}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        items={images}
      />
    </Box>
  );
};

export default Slideshow;
