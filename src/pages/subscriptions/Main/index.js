import { DiamondOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowCircleRight } from "iconsax-react";
import { useState } from "react";
import Header from "../../../components/Header";
import PLANS from "./constants";
import { connect } from "react-redux";
import { showPopup } from "../../../actions/popupActions";
import { Link } from "../../../components/Link";

function Main({ showPopup }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const [primeOption, setPrimeOption] = useState(false);

  const handleClick = (value) => {
    showPopup("form" + value);
  };

  const phoneNumber = "+918605213606";
  const message = "Hey Protein Box, I'd like to get a trial meal";
  const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
      <Header
        label="Subscriptions"
        title="Seamless Nutrition Delivered - Protein Box Subscription Plans"
      />

      <Stack
        direction="row"
        py={2}
        spacing={2}
        alignItems="center"
        justifyContent={sm ? "center" : "start"}
      >
        <Typography variant="body1" color={primeOption ? "secondary" : "white"}>
          Regular
        </Typography>
        <Switch
          color="accent"
          onChange={(event) => {
            setPrimeOption(event.target.checked);
          }}
        />
        <Typography
          variant="body1"
          color={!primeOption ? "secondary" : "white"}
        >
          Prime
        </Typography>
      </Stack>

      <Box mt={4}>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          spacing={4}
          alignItems="center"
        >
          {PLANS[primeOption ? "prime" : "regular"].map(
            (
              { title, desc, features, recommended, offer, newPlan, price },
              idx
            ) => {
              const plan = `${primeOption ? "Prime" : "Regular"} - ${desc}`;
              return (
                <Grid item xs={4} key={idx}>
                  {recommended ? (
                    <Stack
                      data-sal="fade-up"
                      data-sal-delay={100}
                      position="relative"
                      gap={3}
                      bgcolor="#F8C300"
                      borderRadius={4}
                      p={4}
                      border="1px solid #ffffff10"
                    >
                      <Stack
                        spacing={1}
                        sx={{
                          position: "absolute",
                          top: -16,
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <Chip
                          label="Recommended"
                          color="primary"
                          sx={{
                            borderRadius: 3,
                            border: "5px solid #000000",
                            boxSizing: "border-box",
                            p: 1.5,
                          }}
                        />
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box color="black.main" fontSize={36}>
                          <DiamondOutlined fontSize="inherit" />
                        </Box>
                        <Stack>
                          <Typography variant="h6" color="black">
                            {title}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="secondary.inverted"
                          >
                            {desc}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography variant="h4" color="black">
                        {price}
                        <Typography
                          display="inline"
                          variant="caption"
                          color="secondary.inverted"
                          fontWeight={500}
                        >
                          /month
                        </Typography>
                      </Typography>
                      <Stack gap={2}>
                        {features.map((feature, idx) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={1}
                              key={idx}
                              alignItems="center"
                            >
                              <Box color="black">
                                <ArrowCircleRight size={16} variant="Bold" />
                              </Box>
                              <Typography
                                variant="caption"
                                color="secondary.inverted"
                                fontWeight={500}
                              >
                                {feature}
                              </Typography>
                            </Stack>
                          );
                        })}
                      </Stack>
                      <Button
                        onClick={() => handleClick(plan)}
                        variant="contained"
                        color="primaryInverted"
                        fluid
                      >
                        Choose this plan
                      </Button>
                    </Stack>
                  ) : (
                    <Stack
                      data-sal="fade-up"
                      data-sal-delay={300}
                      position="relative"
                      gap={3}
                      bgcolor="#ffffff05"
                      borderRadius={4}
                      p={4}
                      border="1px solid #ffffff10"
                    >
                      <Stack
                        spacing={1}
                        sx={{ position: "absolute", top: 16, right: 16 }}
                      >
                        {offer && <Chip color="red" label={offer} />}
                        {newPlan && <Chip label="New" color="green" />}
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box color="primary.main" fontSize={36}>
                          <DiamondOutlined fontSize="inherit" />
                        </Box>
                        <Stack>
                          <Typography variant="h6">{title}</Typography>
                          <Typography
                            variant="caption"
                            color="secondary"
                            fontWeight={500}
                          >
                            {desc}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography variant="h4">
                        {price}
                        <Typography
                          display="inline"
                          variant="caption"
                          color="secondary"
                        >
                          /month
                        </Typography>
                      </Typography>
                      <Stack gap={2}>
                        {features.map((feature, idx) => {
                          return (
                            <Stack
                              direction="row"
                              spacing={1}
                              key={idx}
                              alignItems="center"
                            >
                              <Box color="primary.main">
                                <ArrowCircleRight size={16} variant="Bold" />
                              </Box>
                              <Typography
                                variant="caption"
                                color="secondary"
                                fontWeight={500}
                              >
                                {feature}
                              </Typography>
                            </Stack>
                          );
                        })}
                      </Stack>
                      <Button
                        variant="outlined"
                        onClick={() => handleClick(plan)}
                        fluid
                      >
                        Choose this plan
                      </Button>
                    </Stack>
                  )}
                </Grid>
              );
            }
          )}
        </Grid>
        <Box pt={8}>
          <Typography textAlign="center">
            Want to see how subscription works?{" "}
            <a target="_blank" style={{ color: "yellow" }} href={whatsappLink}>
              {" "}
              Get a Trial Meal{" "}
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default connect(() => {}, { showPopup })(Main);
