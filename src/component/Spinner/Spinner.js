import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: "100%" }} style={{ padding: "10px" }}>
      <LinearProgress />
    </Box>
  );
}
