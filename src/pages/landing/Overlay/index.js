// Overlay.js
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import SPONSORS from "../sponsors/constants";
import { hidePopup } from "../../../actions/popupActions";
import { CloseOutlined } from "@mui/icons-material";

const Overlay = ({ isPopupVisible, visiblePopup, hidePopup }) => {
  return isPopupVisible ? (
    <div
      onClick={() => hidePopup()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
        zIndex: 1000, // Ensure the overlay is on top
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box bgcolor="black">
        <Stack
          maxWidth={400}
          sx={{ bgcolor: "#ffffff20" }}
          width={"95%"}
          m="auto"
          textAlign="center"
          p={8}
          boxSizing={"border-box"}
          borderRadius={4}
          gap={2}
          position="relative"
        >
          <Box sx={{ position: "absolute", top: "24px", right: "24px" }}>
            <CloseOutlined color="primary" />
          </Box>
          <img
            src={SPONSORS[visiblePopup].icon}
            style={{ width: "50%", margin: "auto" }}
          />
          <Typography variant="h4">{SPONSORS[visiblePopup].title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {SPONSORS[visiblePopup].desc}
          </Typography>
        </Stack>
      </Box>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  visiblePopup: state.popup.visiblePopup,
  isPopupVisible: state.popup.visiblePopup !== null,
});

export default connect(mapStateToProps, { hidePopup })(Overlay);
