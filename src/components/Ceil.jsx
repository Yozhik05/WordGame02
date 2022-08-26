import { Box } from "@mui/material";

export default function Ceil({ char }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          fontSize: "28px",
          alignItems: "center",
          justifyContent: "center",

          border: "1px black solid",
          width: 50,
          height: 50,
          backgroundColor: ".dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        {char}
      </Box>
    </>
  );
}
