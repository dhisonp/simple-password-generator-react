// import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FullBox from "./components/layout/FullBox";
import { useState } from "react";
import generatePassword from "./lib/generatePassword";

function App() {
  const marginLeft = { marginLeft: 5 };

  const generate = () => {
    var options = {
      length: length,
      isUpperCase: isUpperCase,
      isNumbers: isNumbers,
      isSymbols: isSymbols,
    };
    const generated = generatePassword(options);
    setPassword(generated);
  };

  const handleLengthChange = (event, value) => {
    setLength(value);
  };

  const handleUpperCaseChange = () => {
    setUpperCase(!isUpperCase);
  };
  const handleNumbersChange = () => {
    setNumbers(!isNumbers);
  };
  const handleSymbolsChange = () => {
    setSymbols(!isSymbols);
  };

  const [length, setLength] = useState(8);
  const [isUpperCase, setUpperCase] = useState(true);
  const [isNumbers, setNumbers] = useState(false);
  const [isSymbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <FullBox>
        <Typography variant="h4" component="div" color="text.primary">
          Simple Password Generator
        </Typography>
        <Typography variant="overline" component="div" color="text.secondary">
          github: dhisonp
        </Typography>
      </FullBox>
      <FullBox>
        <Typography variant="h4" component="div" sx={{ mb: 6 }}>
          Settings
        </Typography>
        <Box sx={{ minWidth: "50%", textAlign: "center" }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Slider
                  defaultValue={8}
                  aria-label="small"
                  valueLabelDisplay="on"
                  min={8}
                  max={16}
                  sx={{ ml: 3 }}
                  value={length}
                  onChange={handleLengthChange}
                />
              }
              label="Length"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isUpperCase}
                  onChange={handleUpperCaseChange}
                />
              }
              label="Upper Case"
              sx={marginLeft}
            />
            <FormControlLabel
              control={
                <Checkbox checked={isNumbers} onChange={handleNumbersChange} />
              }
              label="Numbers"
              sx={marginLeft}
            />
            <FormControlLabel
              control={
                <Checkbox checked={isSymbols} onChange={handleSymbolsChange} />
              }
              label="Symbols"
              sx={marginLeft}
            />
          </FormGroup>

          <Button
            variant="outlined"
            sx={{ mt: 2, px: 3, py: 1 }}
            onClick={generate}
          >
            Generate
          </Button>
          <Box sx={{minHeight: 60,}}>
            <Typography variant="h5" sx={{ mt: 4 }}>
              {password}
            </Typography>
          </Box>
        </Box>
      </FullBox>
    </Box>
  );
}

export default App;
