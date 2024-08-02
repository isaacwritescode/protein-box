import { Box, Stack, Typography } from "@mui/material";
import Header from "../../../components/Header";
import FEATURES from "./constants";
import Marquee from "react-fast-marquee";

export default function Offerings() {
  return (
    <Box width="100%" py={12}>
      <Header
        label="Benefits"
        title="Nourish Your Body, Elevate Your Life: Protein Box Benefits"
      />
      <Box mt={12}>
        <Marquee>
          {FEATURES.map(({ title, desc, gradient }, idx) => {
            return (
              <Box
                ml={4}
                key={idx}
                bgcolor="#ffffff05"
                textAlign="center"
                border={`1px solid #ffffff50`}
                width={280}
                gap={4}
                sx={{
                  aspectRatio: "2/0.7",
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
