import React from "react";
import { palette } from "../settings";
import { ThemeProvider } from "styled-components";
import Radio from "../components/Radio";
import Checkbox from "../components/Checkbox";

const App = () => {
  const theme = { palette };
  const [color, setColor] = React.useState("Vermelho");
  const [language, setLanguage] = React.useState("");
  return (
    <ThemeProvider theme={theme}>
      <h2>Componente Radio</h2>
      <Radio options={["Azul", "Vermelho"]} value={color} setValue={setColor} />
      <h2>Componente Checkbox</h2>
      <Checkbox
        options={["Javascript", "PHP", "Python"]}
        value={language}
        setValue={setLanguage}
      />
    </ThemeProvider>
  );
};

export default App;
