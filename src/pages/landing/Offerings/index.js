import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { cloneElement } from "react";
import Header from "../../../components/Header";
import FEATURES from "./constants";
import {
  Check,
  CheckCircle,
  CheckCircleOutlineRounded,
} from "@mui/icons-material";
import Marquee from "react-fast-marquee";

export default function Offerings() {
  const theme = useTheme();
  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", lg: "100%" }} py={12}>
      <Header
        label="Benefits"
        title="Nourish Your Body, Elevate Your Life: Protein Box Benefits"
      />
      <Box mt={8}>
        <Marquee>
          {FEATURES.map(({ title, desc, gradient }, idx) => {
            const accent = theme.palette.accent.main;
            return (
              <Box
                ml={4}
                key={idx}
                bgcolor="#ffffff05"
                textAlign="center"
                border={`1px solid #ffffff50`}
                width={300}
                gap={4}
                sx={{
                  aspectRatio: "2/0.6",
                }}
                // data-sal-delay={idx * 100}
                spacing={2}
                p={4}
                borderRadius={3}
              >
                {/* <Stack height={56} width={56} borderRadius={2} border={`1px solid ${accent}`} alignItems="center" justifyContent="center" bgcolor={accent + "10"}>
                {icon}
              </Stack> */}
                <Stack spacing={1}>
                  <Typography
                    variant="body1"
                    textTransform="uppercase"
                    fontWeight={600}
                    sx={{
                      background: `linear-gradient(${gradient})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2">{desc}</Typography>
                </Stack>
              </Box>
            );
          })}
        </Marquee>
      </Box>
    </Box>
  );
}
