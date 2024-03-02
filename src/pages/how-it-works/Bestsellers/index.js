import { Box, Grid } from "@mui/material";
import Header from "../../../components/Header";
import Card from "./Card";
import BESTSELLERS from "./constants";

const Bestsellers = () => {
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={24}>
      <Header label="Bestsellers" title="Our most delivered boxes" />
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, sm: 4 }}
        mt={6}
      >
        {BESTSELLERS.map((elem, idx) => (
          <Grid item xs={4} idx={idx}>
            <Card {...elem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bestsellers;
