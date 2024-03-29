import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link } from "../../components/Link";
import { SocialLinks } from "./SocialLinks";
import { FOOTER_LINKS } from "./constants";

const Footer = () => {
  return (
    <Box
      maxWidth={1000}
      width={{ xs: "90%", lg: "80%" }}
      pt={{ xs: 8, md: 16 }}
      pb={8}
      m="auto"
    >
      <Grid
        container
        spacing={{ xs: 8, md: 0 }}
        alignItems="center"
        columns={{ xs: 4, sm: 4, md: 8 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Stack spacing={4} alignItems="start">
            <Link
              path="/"
              component={<img src="/images/logo.png" width="68%" alt="logo" />}
            />
            <SocialLinks />
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item md width="100%">
          <Box display="grid" gridTemplateColumns="1fr 1fr">
            {FOOTER_LINKS.map(({ title, path, url }, idx) => {
              return (
                <Link
                  key={idx}
                  url={url}
                  path={path}
                  component={
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      fontWeight={500}
                      textAlign={{ xs: "left", md: "center" }}
                      py={2}
                      sx={{
                        "&:hover": { color: "text.primary" },
                      }}
                    >
                      {title}
                    </Typography>
                  }
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
      <Stack
        spacing={2}
        mx="auto"
        mt={12}
        textAlign={{ xs: "left", md: "center" }}
      >
        <Typography variant="body1" color="text.primary" fontWeight={500}>
          ©Protein box 2023
        </Typography>
        <Link
          path="terms"
          component={
            <Typography variant="body1" color="text.secondary" fontWeight={500}>
              Privacy & Terms
            </Typography>
          }
        />
      </Stack>
    </Box>
  );
};

export default Footer;
