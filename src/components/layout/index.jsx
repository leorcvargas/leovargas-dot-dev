import React from "react"
import PropTypes from "prop-types"
import { reset, themes } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { LayoutContainer, LayoutContent } from "./styles";

const ResetStyles = createGlobalStyle`
  ${reset}
  
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <LayoutContainer>
          <LayoutContent>{children}</LayoutContent>
        </LayoutContainer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
