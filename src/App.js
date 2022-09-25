import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <div>Hi! I am the shop page</div>;
};

const App = () => {
  console.log("rendered");
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
