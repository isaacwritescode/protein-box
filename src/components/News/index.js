import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { hideNews } from "../../actions/popupActions";
import { connect } from "react-redux";

const News = ({ hideNews, visibleNews }) => {
  console.log({ visibleNews });
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
            <Stack direction="row" spacing={1}>
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
          <IconButton
            onClick={() => hideNews()}
            sx={{ color: "primaryInverted.main" }}
          >
            <Close />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  visibleNews: state.popup.visibleNews,
});

export default connect(mapStateToProps, { hideNews })(News);
