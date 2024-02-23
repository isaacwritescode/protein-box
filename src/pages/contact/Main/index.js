import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [interested, setInterested] = useState(null);
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();

    const phoneNumber = "+918850916053";

    const details = {
      interested,
      message,
      firstName,
      lastName,
      email
    };

    // Function to handle empty or null values
    const formatValue = (value) => (value ? value : "N/A");

    const text = `Hey Protein Box!\nI'm ${formatValue(
      details.firstName + " " + details.lastName
    )}\nInterested in: ${formatValue(
      details.interested
    )}\nMy email: ${formatValue(
      details.email
    )}\nMessage: ${formatValue(
      details.message
    )}`;

    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
      text
    )}`;

    window.location.href = whatsappLink;
  };

  return (
    <Box width={{ xs: "90%", md: "80%" }} m="auto" py={12} maxWidth={1000}>
      <Stack spacing={1}>
        <Typography
          variant="body1"
          textTransform="uppercase"
          fontWeight={500}
          color="accent.main"
        >
          Contact
        </Typography>
        <Typography variant={sm ? "h2" : "h3"}>Get in touch</Typography>
      </Stack>
      <Box my={4} maxWidth={800} data-sal="fade-up">
        <form name="contact" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <Stack spacing={4} borderRadius={2} width="100%">
            <Stack direction="row" spacing={2}>
              <TextField
                sx={{ width: "100%" }}
                label="First Name"
                name="first-name"
                variant="outlined"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                sx={{ width: "100%" }}
                label="Last Name"
                name="last-name"
                variant="outlined"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </Stack>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl fullWidth required>
              <InputLabel id="demo-simple-select-label">
                Interested in
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={interested}
                label="interested-in"
                onChange={(e) => setInterested(e.target.value)}
              >
                <MenuItem value="Franchise Enquiry">Franchise Enquiry</MenuItem>
                <MenuItem value="Sponsorship Enquiry">Sponsorship Enquiry</MenuItem>
                <MenuItem value="Brand Collaboration">Brand Collaboration</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Message (Optional)"
              name="message"
              rows={4}
              variant="outlined"
              multiline
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              size="large"
              sx={{ width: "fit-content" }}
            >
              Send message
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
