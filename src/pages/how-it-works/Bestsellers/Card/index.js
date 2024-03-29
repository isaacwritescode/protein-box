import { Stack, Typography, Box, Badge } from "@mui/material";

const Card = ({ title, desc, src, isVeg, isNew, price }) => {
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
      height="calc(100% - 48px)"
    >
      <Badge
        color="accent"
        invisible={!price}
        badgeContent={"₹" + price}
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <img src={src} width="100%" alt={title} />
      </Badge>
      <Box width="fit-content" sx={{ position: "absolute", top: 4, right: 24 }}>
        <img
          src={`/images/stepline/${isVeg ? "veg" : "non-veg"}.svg`}
          width={24}
          alt={isVeg ? "veg" : "non-veg"}
        />
      </Box>
      {isNew && (
        <Box
          width="fit-content"
          sx={{ position: "absolute", top: -24, left: -14 }}
        >
          <img src={`/images/stepline/new.svg`} width={72} alt={"new-item"} />
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
