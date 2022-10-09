import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMarkdown = styled(ReactMarkdown)`
  table {
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ccc;
    padding: 5px 15px;
  }
`;

export const Markdown = (props: { content: string }) => (
  <StyledMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      a: (props) => {
        return props.href && props.href.startsWith("/") ? (
          <Link to={props.href}>{props.children}</Link>
        ) : (
          <a href={props.href}>{props.children}</a>
        );
      },
    }}
  >
    {props.content}
  </StyledMarkdown>
);
