import { Box, Stack } from "@mui/material";
import Header from "../../../components/Header";
import Card from "./Card";
import BESTSELLERS from "./constants";

const Bestsellers = () => {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header label="Bestsellers" title="Our most delivered boxes" />
      <Stack direction={{ xs: "column", md: "row" }} spacing={5} mt={8}>
        {BESTSELLERS.map((elem, idx) => (
          <Card idx={idx} {...elem} />
        ))}
      </Stack>
    </Box>
  );
};

export default Bestsellers;
