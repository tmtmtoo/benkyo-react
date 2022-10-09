import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { Link } from "react-router-dom";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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
      // ref: https://stackoverflow.com/questions/66941072/how-to-parse-embeddable-links-from-markdown-and-render-custom-react-components
      a: (props) => {
        return props.href && props.href.startsWith("/") ? (
          <Link to={props.href}>{props.children}</Link>
        ) : (
          <a href={props.href}>{props.children}</a>
        );
      },
      // ref: https://codesandbox.io/s/00uz6?file=/src/App.tsx
      code: ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || "");

        return !inline && match ? (
          <SyntaxHighlighter
            style={materialLight}
            PreTag="div"
            language={match[1]}
            children={String(children).replace(/\n$/, "")}
            showLineNumbers={true}
            {...props}
          />
        ) : (
          <code className={className ? className : ""} {...props}>
            {children}
          </code>
        );
      },
    }}
  >
    {props.content}
  </StyledMarkdown>
);
