import { Page } from "../../ui/Page";
import { Markdown } from "../../ui/Markdown";
import logo from "./logo.png";
import styled from "styled-components";

const CONTENT = `
## このページについて

React を勉強している人の備忘録です。
`;

const Author = styled.img`
  margin-top: 20px;
  width: 150px;
  height: 150px;
`;

export const About = () => (
  <Page showFooter>
    <Markdown content={CONTENT} />
    <Author src={logo} />
  </Page>
);
