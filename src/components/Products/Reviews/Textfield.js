import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function MultilineTextFields({user, setReviewText, reviewText}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: '500px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-multiline-static"
          label={`Review product as ${user.email}`}
          multiline
          rows={4}
          value={reviewText}
          placeholder="Add a review..."
          variant="filled"
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
    </Box>
  );
}
