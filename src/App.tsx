import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Top } from "./components/pages/Top";
import { About } from "./components/pages/About";
import { Article } from "./components/pages/Article";
// @ts-expect-error
import MD20221011 from "./articles/20221011.md";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Top />} />
        <Route path={"/about"} element={<About />} />
        <Route
          path={"/article/20221011"}
          element={<Article content={MD20221011} />}
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
