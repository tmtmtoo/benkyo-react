import styled from "styled-components";
import GithubLogo from "./GitHub-Mark-Light-32px.png";

export const HEADER_HIGHT: number = 40;

const GitHubRepositoryLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  line-height: ${HEADER_HIGHT}px;
  margin-left: 10px;
`;

const GithubImage = styled.img`
  height: ${HEADER_HIGHT - 20}px;
  margin-right: 5px;
`;

const Container = styled.header`
  width: 100%;
  background-color: #505050;
`;

export const Header = () => (
  <Container>
    <GitHubRepositoryLink
      href="https://github.com/tmtmtoo/benkyo-react"
      target="_blank"
      rel="noreferrer"
    >
      <GithubImage src={GithubLogo} />
      tmtmtoo/benkyo-react
    </GitHubRepositoryLink>
  </Container>
);
