import { Page } from "../../ui/Page";
import { Markdown } from "../../ui/Markdown";

const CONTENT = `
## このページについて

React を勉強している人の備忘録です。

[戻る](/)
`;

export const About = () => (
  <Page>
    <Markdown content={CONTENT}></Markdown>
  </Page>
);
