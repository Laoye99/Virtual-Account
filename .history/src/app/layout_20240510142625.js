import "./globals.scss";
import { Raleway } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/AppContext";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "VIRTUAL-ACCOUNT-SERVICE",
  description:
    "The application allows users to sign in and manage virtual account",
  icons: [
    {
      rel: "icon",
      url: "favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <AuthProvider>
      <body className={inter.className}>
      <div
          className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            step={step}
            toggleSidebar={toggleSidebar}
            onMenuItemClick={handleMenuItemClick}
            menuItems={menuItems}
          />
          <div
            className={`overlay ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          ></div>
        </div>
      <DashboardHeader
            selectedStepLabel={selectedStepLabel}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          {children}</body>
      <ToastContainer style={{ fontSize: "2.6rem" }} />
      </AuthProvider>
    </html>
  );
}
