import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Box } from "@mui/material";

const Slideshow = () => {
  const images = [
    {
      original: "images/product/1.jpg",
    },
    {
      original: "images/product/2.jpg",
    },
    {
      original: "images/product/3.jpg",
    },
    {
      original: "images/product/4.jpg",
    },
    {
      original: "images/product/5.jpg",
    },
    {
      original: "images/product/6.jpg",
    },
  ];

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
