import React, { useEffect } from "react"
import Head from "next/head"
import styled from "styled-components"

import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, StylesProvider, Theme } from "@material-ui/core/styles"
import { RecoilRoot, useRecoilState } from "recoil"
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
} from "@mui-treasury/layout"

import {
  getDefaultScheme,
  getStandardScheme,
  getFixedScheme,
  getContentBasedScheme,
  getCozyScheme,
  getMuiTreasuryScheme,
} from "@mui-treasury/layout/presets"

import { getTheme } from "../styles/theme"
import NavHeader from "../navigation/NavHeader"
import NavContent from "../navigation/NavContent"
import MainHeader from "../components/Header"
import { createStyles, makeStyles } from "@material-ui/styles"
import { paleteState } from "state/theme"
import MainLayout from "layout/MainLayout"

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)

const useStyles = (custom: Theme) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: custom.palette.primary.main,
      },
    })
  )

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <RecoilRoot>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </RecoilRoot>
    </React.Fragment>
  )
}

export default MyApp
