import HeaderLayout from "./header-layout";
import NavbarLayout from "./navbar-layout";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-full w-full">
      <HeaderLayout />
      <main className="mx-auto h-full w-[620px] min-w-[300px] max-w-full overflow-x-auto"></main>
      <div className="fixed bottom-0 left-0 right-0 h-20 sm:hidden">
        <NavbarLayout />
      </div>
    </div>
  );
};

export default MainLayout;
