import path from "path";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import GithubLogo from "./GitHub-Mark-Light-32px.png";

const HEADER_HIGHT: number = 40;
const MARGIN: number = 16;

const GitHubRepositoryLink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  line-height: ${HEADER_HIGHT}px;
  margin-left: ${MARGIN}px;
`;

const GithubImage = styled.img`
  height: ${HEADER_HIGHT - 20}px;
  margin-right: 5px;
`;

const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1);
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
  padding: 0px ${MARGIN}px;
  box-sizing: border-box;
  margin-bottom: ${MARGIN * 4}px;
`;

const Navigate = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  padding-left: ${MARGIN}px;
  padding-bottom: ${MARGIN * 2}px;

  > a {
    margin-right: ${MARGIN}px;
  }
`;

const Footer = () => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const isDeep = paths.length >= 3;

  if (isDeep) {
    paths.pop();
    const backURL = `/${paths.join("/")}`;
    return (
      <Navigate>
        <Link to={backURL}>戻る</Link>
        <Link to="/">トップページ</Link>
      </Navigate>
    );
  } else {
    return (
      <Navigate>
        <Link to="/">戻る</Link>
      </Navigate>
    );
  }
};

const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #eeeeee;
  min-height: 100vh;
  position: relative;
`;

export const Page = (props: {
  children?: React.ReactNode;
  showFooter?: boolean;
}) => (
  <PageContainer>
    <Header />
    <Main>{props.children}</Main>
    {props.showFooter ? <Footer /> : null}
  </PageContainer>
);
