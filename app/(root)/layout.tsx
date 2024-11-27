import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
