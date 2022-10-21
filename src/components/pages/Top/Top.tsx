import { Page } from "../../ui/Page";
import { Markdown } from "../../ui/Markdown";

const CONTENT = `
## _React を勉強している_

[このページについて](/about)

- 20221021 [Recoil 使ってみた](/20221021)
- 20221012 [ひたすらページレイアウト直してた](/20221012)
- 20221011 [Markdown で記事を書くようにした](/20221011)
`;

export const Top = () => (
  <Page>
    <Markdown content={CONTENT} />
  </Page>
);
