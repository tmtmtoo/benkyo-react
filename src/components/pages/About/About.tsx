import { Page } from "../../ui/Page";
import { Markdown } from "../../ui/Markdown";

const CONTENT = `
## このページについて

React を勉強している人の備忘録です。
`;

export const About = () => (
  <Page showFooter>
    <Markdown content={CONTENT} />
  </Page>
);
