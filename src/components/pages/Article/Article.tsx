import { Page } from "../../ui/Page";
import { Markdown } from "../../ui/Markdown";

export const Article = (props: { content: string }) => (
  <Page showFooter>
    <Markdown content={props.content} />
  </Page>
);
