import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Daniel Lorenzo Portfolio",
  description: "This is a Daniel Lorenzo react Developer Potfolio",
  icons: {
    icon: "./icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col  justify-between min-h-dvh ">
          <Navbar />
          <main className="flex flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
