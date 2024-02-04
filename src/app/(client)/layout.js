import { Box } from "@mui/material";
import Footer from "../../components/client/Footer";
import Header from "../../components/client/Header";
import Wrapper from "../../components/client/Wrapper";
import "./globals.css";
import ThemeRegistry from "@/components/themeRegistry/ThemeRegistry";
import { PrimeReactProvider } from "primereact/api";

export const metadata = {
  title: "HUK",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <PrimeReactProvider>
            <Wrapper>
              <Header />

              <Box bgcolor="#fff" borderRadius={2} minHeight="100vh">
                {children}
              </Box>

              <Footer />
            </Wrapper>
          </PrimeReactProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}