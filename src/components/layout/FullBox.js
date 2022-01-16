import { Box } from "@mui/system";

const FullBox = (props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      minHeight: "100vh",
      minWidth: "50%",
    }}
  >
    {props.children}
  </Box>
);

export default FullBox;
