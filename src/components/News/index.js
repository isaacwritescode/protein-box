import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { hideNews } from "../../actions/popupActions";
import { connect } from "react-redux";
import { useTheme } from "@emotion/react";

const News = ({ hideNews, visibleNews }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      className={visibleNews || "shrink-out"}
      sx={{
        bgcolor: "#D2BF0D",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 999,
        transition: "all ease 0.3s",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Box mx="auto" width="fit-content">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              py={{ xs: 1, sm: 0 }}
              spacing={{ xs: 0.5, sm: 1 }}
            >
              <Typography variant="body2" color="primaryInverted.main">
                We got featured on Startup Stories 🎉
              </Typography>
              <Button
                onClick={() =>
                  window.open(
                    "https://startupstorymedia.com/stories-2024-02-protein-box-startup-story/"
                  )
                }
                variant="contained"
                size="small"
                color="primaryInverted"
                sx={{
                  py: "4px",
                  px: "2px",
                  borderRadius: "4px !important",
                  fontSize: 8,
                }}
              >
                Read more
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={1}>
          {sm ? (
            <IconButton
              onClick={() => hideNews()}
              sx={{ color: "primaryInverted.main" }}
            >
              <Close />
            </IconButton>
          ) : (
            <Box position="absolute" top={0} right={8}>
              <IconButton
                onClick={() => hideNews()}
                sx={{ color: "primaryInverted.main" }}
              >
                <Close />
              </IconButton>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  visibleNews: state.popup.visibleNews,
});

export default connect(mapStateToProps, { hideNews })(News);
