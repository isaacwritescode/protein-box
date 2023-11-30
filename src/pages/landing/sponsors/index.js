import { Box, Stack, Tooltip } from "@mui/material";
import SPONSORS from "./constants";
import { useState } from "react";
import { showPopup, hidePopup } from "../../../actions/popupActions";
import { connect } from "react-redux";

function Sponsors({ showPopup, hidePopup, visiblePopup }) {
  return (
    <Stack width="100%" bgcolor="#1a1c1e">
      <Stack
        width={{ xs: "90%", lg: "100%" }}
        direction="row"
        alignItems="center"
        maxWidth={1000}
        mx="auto"
        gap={{ xs: 4, md: 8 }}
        py={8}
        boxSizing="border-box"
        flexWrap="wrap"
      >
        {SPONSORS.map(({ title, desc, icon }, idx) => (
          <Box
            key={idx}
            data-sal="fade-up"
            data-sal-delay={idx * 100}
            sx={{ cursor: "pointer" }}
            onClick={() => showPopup(idx.toString())}
          >
            <img src={icon} height={48} alt={title} width="100%" />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

const mapStateToProps = (state) => ({
  visiblePopup: state.popup.visiblePopup,
});

export default connect(mapStateToProps, { showPopup, hidePopup })(Sponsors);
