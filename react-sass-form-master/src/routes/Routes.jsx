import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { GlobalSection } from "../components/GlobalSection/GlobalSection";

const RouteList = [
  {
    path: "/",
    exact: true,
    component: Home,
  },

  {
    path: "/about",
    exact: true,
    component: About,
  },
];

export const Routers = () => {
  //   <GlobalSection>
  <Routes>
    {RouteList.map((r) => {
      <Route
        path={r.path}
        exact={r.exact}
        component={r.component}
        key={r.path}
      />;
    })}
  </Routes>;
  //   </GlobalSection>;
};
