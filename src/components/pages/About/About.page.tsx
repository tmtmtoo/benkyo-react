import { Link } from "react-router-dom";

export const AboutPage = () => (
  <main>
    <p>React を勉強している人の練習リポジトリです</p>
    <p>
      <a
        href="https://github.com/tmtmtoo/benkyo-react"
        target="_blank"
        rel="noreferrer"
      >
        tmtmtoo/benkyo-react
      </a>
    </p>
    <Link to="/">戻る</Link>
  </main>
);
