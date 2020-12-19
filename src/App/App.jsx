import React from "react";
import { palette } from "../settings";
import { ThemeProvider } from "styled-components";
import Radio from "../components/Radio";

const App = () => {
  const theme = { palette };
  const [color, setColor] = React.useState("Vermelho");
  return (
    <ThemeProvider theme={theme}>
      <h2>Componente Radio</h2>
      <Radio options={["Azul", "Vermelho"]} value={color} setValue={setColor} />
    </ThemeProvider>
  );
};

export default App;
