// @flow
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { render } from "react-dom";
import ReactGiphySearchBox from "../../src";
import styles from "./index.module.css";
import styled from "@emotion/styled";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "../../src/ApolloClient/config";
import { ThemeProvider } from "./ThemeContext";

const Wrapper = styled("div")`
  background: ${(props) => props.theme.background};
  h1 {
    color: ${(props) => props.theme.body};
  }
  border-radius: 0.3rem;
  display: inline-block;
  padding: 3rem;
  margin-left: 2rem;
  box-shadow: 0 0.3rem 1rem rgba(8, 38, 78, 0.2);
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Demo = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <ThemeProvider>
        <Wrapper>
          <ReactGiphySearchBox
            onSelect={(item) => console.log(item)}
            searchFormClassName={styles.searchSearchForm}
            masonryConfig={[
              { columns: 9, imageWidth: 110, gutter: 5 },
              { mq: "100vh", columns: 9, imageWidth: 110, gutter: 5 },
            ]}
          />
        </Wrapper>
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>
);

const demo = document.querySelector("#demo");

if (demo !== null) {
  render(<Demo />, demo);
}
