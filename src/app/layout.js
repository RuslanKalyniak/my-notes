import { AppProvider } from "@/context/page";
import "./globals.css";


export const metadata = {
  title: "RUSLAN",
  description: "Ruslan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}