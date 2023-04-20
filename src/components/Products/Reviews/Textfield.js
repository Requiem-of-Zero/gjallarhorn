import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function MultilineTextFields({user, setReviewText, reviewText}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
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
          defaultValue={reviewText}
          placeholder="Add a review..."
          variant="filled"
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
    </Box>
  );
}
