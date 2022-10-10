import React from "react";
import styled from "styled-components";
import GithubLogo from "./GitHub-Mark-Light-32px.png";

const HEADER_HIGHT: number = 40;

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

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #505050;
`;

const Header = () => (
  <HeaderContainer>
    <GitHubRepositoryLink
      href="https://github.com/tmtmtoo/benkyo-react"
      target="_blank"
      rel="noreferrer"
    >
      <GithubImage src={GithubLogo} />
      tmtmtoo/benkyo-react
    </GitHubRepositoryLink>
  </HeaderContainer>
);

const Main = styled.main`
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export const Page = (props: { children?: React.ReactNode }) => (
  <PageContainer>
    <Header />
    <Main>{props.children}</Main>
  </PageContainer>
);
