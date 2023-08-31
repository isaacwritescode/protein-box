import { Stack } from "@mui/material";
import SPONSORS from "./constants";

export default function Sponsors() {
  return <Stack width="100%" direction="row" justifyContent="space-between" maxWidth={1000} mx="auto" gap={8} py={8} boxSizing="border-box">
    {SPONSORS.map(({ title, icon }, idx) =>
      <img key={idx} src={icon} alt={title} height={64} />
    )}
  </Stack>
}