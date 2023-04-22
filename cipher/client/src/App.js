import "./App.css";
import Heatmap from "./components/Pages/Heatmap";
import { Button, Container } from "react-bootstrap";
import NavigationHor from "./components/NavigationHor";
import Layout from "./components/Layout";
import Banner from "./components/Pages/Banner";
import Aboutme from "./components/Pages/Aboutme";
import OnWeb from "./components/Pages/OnWeb";
import Prof from "./components/Pages/Prof";
import Intrest from "./components/Pages/Intrest";
import Password from "./components/Pages/Password";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import { UserContextProvider } from "./UserContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<Layout />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;

// {/*
// <Login />
// {/* <Register /> */}
// {/* {/* <Layout></Layout> */}
// <Container fluid>
//   <Banner />
//   <Aboutme />
//   <Heatmap />
//   <OnWeb />
//   <Prof />
//   <Intrest />
//   <Password />
//   <div>j</div>
// </Container>
//  */}
