import { Box } from "@mui/material";
import Header from "../../../components/Header";

export default function Availability() {
  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={16}>
    <Header
      label="Widely available"
      title="Find us on Swiggy & Zomato"
    />

    <Box mt={8}>
      <img data-sal="fade-up" src="/images/availability/Z&S.png" width="100%" alt="" />
    </Box>
  </Box>
}