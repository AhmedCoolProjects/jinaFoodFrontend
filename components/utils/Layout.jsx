import { useMemo } from "react";
import { THEME } from "constants/Colors";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
