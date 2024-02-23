import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Website",
  description: "My Website's Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
