import Header from "./Header";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navbar />
    </>
  );
};
export default Layout;
