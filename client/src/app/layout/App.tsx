import { CssBaseline } from "@mui/material";
import Header from "./Header";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";




function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default App;
