import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";

const OrderBlock = () => {
  return (
    <Box
      maxWidth={1000}
      mx="auto"
      width={{ xs: "90%", md: "100%" }}
      mt={12}
      py={6}
      borderRadius={4}
    >
      <Header title="Fastest Delivery & Easy Pickup" label="ORDER NOW" />
      <Grid
        container
        columns={{ xs: 5, md: 12 }}
        spacing={8}
        mt={{ md: 0 }}
        alignItems="center"
      >
        <Grid item xs={5}>
          <img src="/images/stepline/order-online.png" width="100%" />
        </Grid>
        <Grid item xs={7}>
          <Stack spacing={2} alignItems="start">
            <Typography variant="h4">
              Find us on Swiggy and Zomato or order directly from us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We're on all your favourite platforms
            </Typography>
            <Stack direction="row" spacing={2} pt={2} flexWrap="wrap">
              <Button
                startIcon={<img src="/images/logo-black.svg" width={32} />}
                variant="contained"
              >
                Order now
              </Button>
              <Button
                startIcon={
                  <img src="/images/brand-logos/swiggy.svg" width={32} />
                }
                variant="outlined"
              >
                Order now
              </Button>
              <Button
                startIcon={
                  <img src="/images/brand-logos/zomato.svg" width={32} />
                }
                variant="outlined"
              >
                Order now
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderBlock;
