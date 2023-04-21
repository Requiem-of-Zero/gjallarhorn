import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { CircularProgress } from "@mui/material";

export default function MultilineTextFields({
  user,
  setReviewText,
  reviewText,
  onCreateReview,
  createLoading,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="relative">
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
        {createLoading ? (
          <CircularProgress
            color="secondary"
            className="absolute bottom-3 right-3"
          />
        ) : (
          <button
            disabled={reviewText.length === 0}
            onClick={(e) => {
              e.preventDefault();
              onCreateReview(reviewText);
            }}
            className={`${
              reviewText.length === 0 ? "text-light-grey" : "text-white"
            } absolute bottom-3 right-3 bg-[#181818] px-3 rounded hover:bg-grey transition-colors cursor-pointer`}
          >
            Post
          </button>
        )}
      </div>
    </Box>
  );
}
