import { TimePicker } from "@mui/x-date-pickers";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import dayjs from "dayjs";

export default function Form({ hidePopup }) {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");
  const [foodType, setFoodType] = useState(null);
  const [lunchTime, setLunchTime] = useState(dayjs("2022-04-17T14:30"));
  const [dinnerTime, setDinnerTime] = useState(dayjs("2022-04-17T19:30"));
  const [allergies, setAllergies] = useState("");
  const [standingInstructions, setStandingInstructions] = useState("");

  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();

    const phoneNumber = "+918850916053";

    const details = {
      name,
      mobileNumber,
      city,
      fitnessGoals,
      foodType,
      lunchTime,
      dinnerTime,
      allergies,
      standingInstructions,
    };

    // Function to handle empty or null values
    const formatValue = (value) => (value ? value : "N/A");

    const message = `
      Hey Protein Box!
      I'm ${formatValue(details.name)},
      Looking for you to assist me with my fitness goals.
      Here are my details:

      Name: ${formatValue(details.name)}
      Mobile Number: ${formatValue(details.mobileNumber)}
      City: ${formatValue(details.city)}
      Fitness Goals: ${formatValue(details.fitnessGoals)}
      Food Type: ${formatValue(details.foodType)}
      Lunch Time: ${formatValue(details.lunchTime)}
      Dinner Time: ${formatValue(details.dinnerTime)}
      Allergies: ${formatValue(details.allergies)}
      Standing Instructions: ${formatValue(details.standingInstructions)}
`;

    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappLink;
  };

  return (
    <Stack
      mx="auto"
      borderRadius={4}
      maxWidth={800}
      width={{ xs: "95%", sm: "auto" }}
      bgcolor="#202020"
      p={{ xs: 4, sm: 8 }}
      boxSizing="border-box"
      gap={4}
      position="relative"
      height="90vh"
      overflow="auto"
    >
      <Box
        onClick={() => hidePopup()}
        sx={{
          position: "absolute",
          top: "24px",
          right: "24px",
          cursor: "pointer",
        }}
      >
        <CloseOutlined color="primary" />
      </Box>
      <img
        src="/images/logo.png"
        width={120}
        style={{ margin: "auto" }}
        alt="alto"
      />
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="event" />
        <Stack spacing={4} borderRadius={2} width="100%">
          <Stack direction="row" spacing={2}>
            <TextField
              sx={{ width: "100%" }}
              label="Name"
              name="name"
              variant="outlined"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              sx={{ width: "100%" }}
              label="Mobile Number"
              name="mobile-number"
              variant="outlined"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Stack>
          <FormControl fullWidth required>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem value="Nagpur">Nagpur</MenuItem>
              <MenuItem value="Goa">Goa</MenuItem>
              <MenuItem value="Gurugram">Gurugram</MenuItem>
            </Select>
          </FormControl>
          <Stack spacing={1}>
            <Typography variant="h6">
              Q. What are your fitness goals?
            </Typography>
            <TextField
              label="Fitness Goals"
              name="fitness-goals"
              required
              variant="outlined"
              value={fitnessGoals}
              onChange={(e) => setFitnessGoals(e.target.value)}
            />
          </Stack>
          <FormControl required>
            <Typography variant="h6">
              Q. What type of food do you eat?*
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              <FormControlLabel
                required
                value="Non Vegetarian"
                control={<Radio />}
                label="Non Vegetarian"
              />
              <FormControlLabel
                required
                value="Vegan"
                control={<Radio />}
                label="Vegan"
              />
              <FormControlLabel
                required
                value="Vegetarian"
                control={<Radio />}
                label="Vegetarian"
              />
            </RadioGroup>
          </FormControl>
          <Stack spacing={1}>
            <Typography variant="h6">Q. When do you eat?</Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Lunch time"
                type="time"
                variant="outlined"
                fullWidth
                required
                value={lunchTime}
                onChange={(e) => setLunchTime(e.target.value)}
              />
              <TextField
                label="Dinner time"
                type="time"
                fullWidth
                variant="outlined"
                required
                value={dinnerTime}
                onChange={(e) => setDinnerTime(e.target.value)}
              />
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6">
              Q. Are you allergic, intolerant to any food?
            </Typography>
            <TextField
              label="Allergies"
              name="allergies"
              variant="outlined"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6">
              Q. Any other standing instruction for us?
            </Typography>
            <TextField
              label="Standing Instructions"
              name="standing-instructions"
              variant="outlined"
              value={standingInstructions}
              onChange={(e) => setStandingInstructions(e.target.value)}
            />
          </Stack>
          <Button type="submit" variant="contained" size="large">
            Send message
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
