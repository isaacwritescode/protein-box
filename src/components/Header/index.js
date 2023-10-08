import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";


export default function Header({ label, title, desc, ...props }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return <Box data-sal="fade-up">
    <Stack alignItems={{
      xs: "start", md: "center"
    }}
      textAlign={{ xs: "start", md: "center" }}
      gap={1} flex={2}>
      <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">{label}</Typography>
      <Typography variant={sm ? "h2" : "h3"} >{title}</Typography>
      <Typography variant="body1" fontWeight={500} color="secondary">{desc}</Typography>
    </Stack>
  </Box>
}