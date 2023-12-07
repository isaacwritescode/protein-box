import { Box, Stack, Tooltip } from "@mui/material";
import SPONSORS from "./constants";
import { useState } from "react";
import { showPopup, hidePopup } from "../../../actions/popupActions";
import { connect } from "react-redux";
import Marquee from "react-fast-marquee";

function Sponsors({ showPopup, hidePopup, visiblePopup }) {
  return (
    <Stack width="100%" bgcolor="#1a1c1e">
      <Box width="100%" maxWidth={1000} mx="auto" py={8}>
        <Marquee>
          {SPONSORS.map(({ title, desc, icon }, idx) => (
            <Box
              ml={{ xs: 4, md: 8 }}
              key={idx}
              sx={{ cursor: "pointer" }}
              onClick={() => showPopup(idx.toString())}
            >
              <img src={icon} height={48} alt={title} width="100%" />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Stack>
  );
}

const mapStateToProps = (state) => ({
  visiblePopup: state.popup.visiblePopup,
});

export default connect(mapStateToProps, { showPopup, hidePopup })(Sponsors);
