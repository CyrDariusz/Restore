import { CssBaseline } from "@mui/material";
import Header from "./Header";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'




function App() {

  return (
    <>
    <ToastContainer position="bottom-right" hideProgressBar theme="colored"></ToastContainer>
      <CssBaseline />
      <Header />
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default App;
