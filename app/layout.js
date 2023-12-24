import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Theme from "@/components/ThemeSwitch";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
