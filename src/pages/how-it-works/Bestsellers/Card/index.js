import { Stack, Typography, Box } from "@mui/material";

const Card = ({ title, desc, src, isVeg, isNew }) => {
  return (
    <Stack
      spacing={4}
      bgcolor="grey.900"
      boxSizing="border-box"
      flex={1}
      p={8}
      borderRadius={4}
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <img src={src} width="100%" />
      <Box width="fit-content" sx={{ position: "absolute", top: 4, right: 24 }}>
        <img
          src={`/images/stepline/${isVeg ? "veg" : "non-veg"}.svg`}
          width={24}
        />
      </Box>
      {isNew && (
        <Box
          width="fit-content"
          sx={{ position: "absolute", top: -24, left: -14 }}
        >
          <img src={`/images/stepline/new.svg`} width={72} />
        </Box>
      )}
      <Stack>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Card;
