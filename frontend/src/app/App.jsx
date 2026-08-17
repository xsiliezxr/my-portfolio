import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};