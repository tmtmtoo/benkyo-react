import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Top } from "./components/pages/Top";
import { About } from "./components/pages/About";
import { Article } from "./components/pages/Article";
import { Error } from "./components/pages/Error";
// @ts-expect-error
import MD20221011 from "./articles/20221011.md";
// @ts-expect-error
import MD20221012 from "./articles/20221012.md";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Top />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"20221012"} element={<Article content={MD20221012} />} />
        <Route path={"20221011"} element={<Article content={MD20221011} />} />
        <Route path="*" element={<Error message="Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
