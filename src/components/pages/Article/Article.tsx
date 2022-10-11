import { Page } from "../../ui/Page";
import { Markdown } from "../../ui/Markdown";

export const Article = (props: { content: string }) => (
  <Page>
    <Markdown content={props.content} />
  </Page>
);
