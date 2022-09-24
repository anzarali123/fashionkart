import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <div>Hi! I am the shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
