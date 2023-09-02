import { DiamondOutlined } from "@mui/icons-material";
import { Box, Button, Chip, Grid, Stack, Switch, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TickCircle } from "iconsax-react";
import { useState } from "react";
import Header from "../../../components/Header";
import PLANS from "./constants";

export default function Main() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const [anually, setAnually] = useState(false);

  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
    <Header
      label="Subscriptions"
      title="Seamless Nutrition Delivered - Protein Box Subscription Plans"
    />

    <Stack direction="row" py={2} spacing={2} alignItems="center" justifyContent={sm ? "center" : "start"}>
      <Typography variant="body1" color={anually ? "secondary" : "white"}>
        Monthly
      </Typography>
      <Switch color="accent" onChange={(event) => {
        setAnually(event.target.checked)
      }}
      />
      <Typography variant="body1" color={!anually ? "secondary" : "white"}>
        Yearly
      </Typography>
    </Stack>

    <Box mt={4}>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={4} alignItems="center">
        {PLANS.map(({ title, desc, features, recommended, offer, newPlan, price: {
          monthly,
          yearly
        } }, idx) => {
          return <Grid item xs={4} key={idx}>
            {recommended ? <Stack data-sal="fade-up" data-sal-delay={100} position="relative" gap={3} bgcolor="#F8C300" borderRadius={4} p={4} border="1px solid #ffffff10">
              <Stack spacing={1} sx={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)" }}>
                <Chip label="Recommended" color="primary" sx={{ borderRadius: 3, border: "5px solid #000000", boxSizing: "border-box", p: 1.5 }} />
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box color="black.main" fontSize={36} >
                  <DiamondOutlined fontSize="inherit" />
                </Box>
                <Stack>
                  <Typography variant="h6" color="black">{title}</Typography>
                  <Typography variant="caption" color="secondary.inverted">{desc}</Typography>
                </Stack>
              </Stack>
              <Typography variant="h4" color="black">
                {anually ? yearly : monthly}
                <Typography display="inline" variant="caption" color="secondary.inverted">
                  /monthly
                </Typography>
              </Typography>
              <Stack gap={2}>
                {features.map((feature, idx) => {
                  return <Stack direction="row" spacing={1} key={idx} alignItems="center">
                    <Box color="black">
                      <TickCircle size={16} variant="Bold" />
                    </Box>
                    <Typography variant="caption" color="secondary.inverted">{feature}</Typography>
                  </Stack>
                })}
              </Stack>
              <Button variant="contained" color="primaryInverted" fluid>Choose this plan</Button>
            </Stack> :
              <Stack data-sal="fade-up" data-sal-delay={300} position="relative" gap={3} bgcolor="#ffffff05" borderRadius={4} p={4} border="1px solid #ffffff10">
                <Stack spacing={1} sx={{ position: "absolute", top: 16, right: 16 }}>
                  {offer && <Chip color="red" label={offer} />}
                  {newPlan && <Chip label="New" color="green" />}
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box color="primary.main" fontSize={36}>
                    <DiamondOutlined fontSize="inherit" />
                  </Box>
                  <Stack>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="caption" color="secondary">{desc}</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h4">
                  {anually ? yearly : monthly}
                  <Typography display="inline" variant="caption" color="secondary">
                    /monthly
                  </Typography>
                </Typography>
                <Stack gap={2}>
                  {features.map((feature, idx) => {
                    return <Stack direction="row" spacing={1} key={idx} alignItems="center">
                      <Box color="primary.main">
                        <TickCircle size={16} variant="Bold" />
                      </Box>
                      <Typography variant="caption" color="secondary">{feature}</Typography>
                    </Stack>
                  })}
                </Stack>
                <Button variant="outlined" fluid>Choose this plan</Button>
              </Stack>}
          </Grid>
        })}
      </Grid>
    </Box>
  </Box>
}