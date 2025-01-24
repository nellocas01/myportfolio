import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contattami
      </Typography>
      <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Messaggio"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
        Invia
      </Button>
    </Box>
  );
};

export default Contact;
