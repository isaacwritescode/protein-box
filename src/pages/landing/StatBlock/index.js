import { useTheme } from "@emotion/react";
import { Divider, List, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { camelCaseToSentance } from "../../../utils/camelCaseToSentance";
import { PROJECT_STATS } from "./constants";

const StatBlock = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [onCountUpEnd, setOnCountUpEnd] = useState(false);
  return (
    <VisibilitySensor
      active={!viewPortEntered}
      onChange={(isVisible) => {
        if (isVisible) {
          setViewPortEntered(true);
        }
      }}
      delayedCall
    >
      <Box
        width={{ xs: "90%", lg: "75%" }}
        bgcolor="#ffffff05"
        borderRadius={2}
        border="1px solid #ffffff10"
        p={6}
        boxSizing="border-box"
        maxWidth={1000}
        m="auto"
      >
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction={{ sm: "row", xs: "column" }}
        >
          {Object.entries(PROJECT_STATS).map(
            ([key, { value, suffix, decimal }], idx) => (
              <Fragment key={idx}>
                <Stack
                  spacing={{ xs: 2 }}
                  direction={{ xs: "column", md: "row" }}
                  textAlign={{ xs: "center", md: "left" }}
                  maxWidth={sm ? 200 : "100%"}
                  flex={1}
                  alignItems="center"
                >
                  <CountUp
                    start={viewPortEntered ? null : 0}
                    end={value}
                    duration={0.5}
                    onEnd={() => (viewPortEntered ? setOnCountUpEnd(true) : "")}
                    decimals={decimal}
                  >
                    {({ countUpRef }) => {
                      return (
                        <>
                          <Typography
                            ref={countUpRef}
                            variant="h3"
                            fontWeight={600}
                            color="white.main"
                            textTransform="capitalize"
                          >
                            {onCountUpEnd && (
                              <Box display="inline">{suffix}</Box>
                            )}
                          </Typography>
                        </>
                      );
                    }}
                  </CountUp>
                  {onCountUpEnd && (
                    <Typography
                      variant="body1"
                      textTransform="capitalize"
                      color="grey.400"
                      fontWeight={500}
                      width={sm ? "80%" : "auto"}
                    >
                      {camelCaseToSentance(key)}
                    </Typography>
                  )}
                </Stack>
                {idx < Object.entries(PROJECT_STATS).length - 1 &&
                  (sm ? (
                    <List>
                      <Divider
                        sx={{ height: "48px", borderColor: "#ffffff20" }}
                        orientation="vertical"
                      />
                    </List>
                  ) : (
                    <List sx={{ width: "80%", my: 4, mx: "auto" }}>
                      <Divider
                        sx={{ borderColor: "#ffffff20" }}
                        orientation="horizontal"
                      />
                    </List>
                  ))}
              </Fragment>
            )
          )}
        </Stack>
      </Box>
    </VisibilitySensor>
  );
};

export default StatBlock;
