import {
  Box,
  Button,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../../../components/Header";
import AVAILABILITY from "./constants";

export default function Availability() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={16}>
      <Box maxWidth={600} m="auto">
        <Header
          label="Widely available"
          title="Order through your favourite platforms"
        />
      </Box>

      <Box
        border="1px solid #ffffff10"
        borderRadius={8}
        boxSizing="border-box"
        p={8}
        my={8}
      >
        <Stack
          justifyContent="space-between"
          alignItems="center"
          maxWidth={800}
          mx="auto"
          spacing={8}
          direction={{ xs: "column", md: "row" }}
        >
          {AVAILABILITY.map(({ icon, title, main }, idx) => {
            return (
              <>
                <Stack spacing={4} alignItems="center" justifyContent="center">
                  <img src={icon} height={120} alt={title} />
                  {main && <Button variant="contained">Order directly</Button>}
                </Stack>
                {idx !== AVAILABILITY.length - 1 && sm && (
                  <Divider
                    flexItem
                    orientation={sm ? "vertical" : "horizontal"}
                  />
                )}
              </>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
