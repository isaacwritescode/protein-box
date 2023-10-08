import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { ROADMAP } from "./constants";


export default function Stepline() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [seen, setSeen] = useState([]);


  return <Box maxWidth={1000} m="auto" width={{ xs: "90%", md: "100%" }} pt={12}>
    <Stack alignItems={{
      xs: "start", md: "center"
    }}
      textAlign={{ xs: "start", md: "center" }}
      gap={1} flex={2}>
      <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Try it now</Typography>
      <Typography variant={sm ? "h2" : "h3"} >Get your protein box in 3 simple steps</Typography>
    </Stack>
    <Box mt={12} maxWidth={800} mx="auto">
      {ROADMAP.map(({ title, desc, img }, idx) =>
        <InView
          key={idx}
          threshold={0.5}
          triggerOnce
          onChange={(inView, entry) => {
            if (inView) {
              if (!seen.includes(idx)) {
                setSeen(seen => [...seen, idx])
              }
              // else
              //   setSeen(seen => seen.filter(t => t !== seen[seen.length - 1]))
            }
          }}
        >
          {({ ref, inView }) => {
            return md ? <Grid key={idx} ref={ref} container columns={{ xs: 12 }}>
              <Grid item xs>
                <Box mb={24}>
                  {idx % 2 !== 0 ? <Stack textAlign="right" mt={24} mr={12} spacing={2} className={inView ? "fade-up fade-up-animate" : "fade-up"}>
                    <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Step {idx + 1}</Typography>
                    <Typography variant="h3" fontWeight={600}>{title}</Typography>
                    <Typography variant="body1" fontWeight={500} color="secondary">{desc}</Typography>
                  </Stack> :
                    <Box mr={12}>
                      <img src={img} width="100%" />
                    </Box>
                  }
                </Box>
              </Grid>
              <Grid item xs="auto">
                <Stack direction="column" mt={{ xs: 2.5, md: 25 }} className={seen.includes(idx) ? "build-in" : "build-out"} sx={{
                  transition: "height 2s 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                }}>
                  <Box position="relative" width="5px" m="auto" flex={1} sx={{ background: idx !== ROADMAP.length - 1 ? theme.palette.accent.main : "transparent", transitionDuration: "0.7s", }}>
                    <Box className={seen.includes(idx) ? "fade-in" : "fade-out"} >
                      <Box width={{ xs: 36, sm: 64, md: 80 }} borderRadius={100} bgcolor="accent.light" top={{ xs: -18, sm: -32, md: -40 }} sx={{ display: "grid", placeItems: "center", position: "absolute", left: "50%", transform: "translateX(-50%)", transition: "all ease 0.7s", aspectRatio: "1/1" }}>
                        <Box width={{ xs: 10, sm: 16, md: 24 }} borderRadius={100} bgcolor="accent.main" sx={{ aspectRatio: "1/1" }}>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs>
                <Box mb={24}>
                  {idx % 2 === 0 ? <Stack ml={{ xs: 4, sm: 6, md: 12 }} mt={24} spacing={2} className={inView ? "fade-up fade-up-animate" : "fade-up"} sx={{ visibility: idx % 2 === 1 ? "hidden" : "visible" }}>
                    <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Step {idx + 1}</Typography>
                    <Typography variant={md ? "h3" : "h4"} fontWeight={600}>{title}</Typography>
                    <Typography variant="body1" fontWeight={500} color="secondary">{desc}</Typography>
                  </Stack>
                    : <Box ml={12}>
                      <img src={img} width="100%" />
                    </Box>}
                </Box>
              </Grid>
            </Grid> :
              <Grid key={idx} ref={ref} container columns={{ xs: 12 }}>
                <Grid item xs="auto">
                  <Stack direction="column" mt={{ xs: 2.5, md: 3 }} className={seen.includes(idx) ? "build-in" : "build-out"} sx={{
                    transition: "height 2s 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}>
                    <Box position="relative" width="5px" m="auto" flex={1} sx={{ background: idx !== ROADMAP.length - 1 ? theme.palette.accent.main : "transparent", transitionDuration: "0.7s", }}>
                      <Box className={seen.includes(idx) ? "fade-in" : "fade-out"}>
                        <Box width={{ xs: 36, sm: 64, md: 80 }} borderRadius={100} bgcolor="accent.light" top={{ xs: -18, sm: -32, md: -40 }} sx={{ display: "grid", placeItems: "center", position: "absolute", left: "50%", transform: "translateX(-50%)", transition: "all ease 0.7s", aspectRatio: "1/1" }}>
                          <Box width={{ xs: 10, sm: 16, md: 24 }} borderRadius={100} bgcolor="accent.main" sx={{ aspectRatio: "1/1" }}>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs alignSelf="center">
                  <Stack ml={{ xs: 4, sm: 6, md: 8 }} spacing={2} mb={24} className={inView ? "fade-up fade-up-animate" : "fade-up"} sx={{ visibility: md ? idx % 2 === 1 ? "hidden" : "visible" : "visible" }}>
                    <Typography variant="body1" textTransform="uppercase" fontWeight={500} color="accent.main">Step {idx + 1}</Typography>
                    <Typography variant="h4" fontWeight={600}>{title}</Typography>
                    <Stack spacing={4}>
                      <Typography variant="body1" fontWeight={500} color="secondary">{desc}</Typography>
                      <img src={img} width="100%" />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
          }}
        </InView>)}
    </Box>
  </Box>
}