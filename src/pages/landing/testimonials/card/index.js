import { Star } from "@mui/icons-material";
import { Rating, Stack, Typography } from "@mui/material";

export const Card = ({ name, description, review, image }) => {
  return (
    <Stack spacing={3} p={4} borderRadius={2} border="1px solid #ffffff20" bgcolor="#ffffff05" alignItems="start">
      <Stack direction="row" spacing={2} alignItems="center">
        <img src={image} width="64px" height="64px" alt="" />
        <Stack>
          <Typography variant="h6" fontWeight={600}>
            {name}
          </Typography>
          <Typography variant="body2" color="secondary">
            {description}
          </Typography>
        </Stack>
      </Stack>
      <Rating
        defaultValue={5}
        emptyIcon={<Star style={{ zIndex: -1 }} fontSize="inherit" />}
        readOnly
      />
      <Typography variant="body2" color="secondary" fontWeight={400}>
        {review}
      </Typography>
    </Stack>
  );
};