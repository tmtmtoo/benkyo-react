import { Page } from "../../ui/Page";
import { Markdown } from "../../ui/Markdown";

const CONTENT = `
## _React を勉強している_

[このページについて](/about)
`;

export const Top = () => (
  <Page>
    <Markdown content={CONTENT} />
  </Page>
);
