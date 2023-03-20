import SectionContainer from "./SectionContainer";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Wrapper = ({ children }) => {
  return (
    <>
      <HeaderGradient />
      <SectionContainer>
        <header className="flex items-center py-10">
          <Navbar />
        </header>
        <main className="container mx-auto px-4 py-8">
          <div>{children}</div>
        </main>
        <Footer />
      </SectionContainer>
    </>
  );
};

function HeaderGradient() {
  return (
    <div className="mx-auto max-w-6xl motion-safe:animate-rotate-colors pointer-events-none z-[-2]">
      <div className="absolute inset-x-0 bg-gradient-to-r from-indigo-300 to-purple-400 opacity-30 blur-3xl top-[-64px] h-[200px]" />
    </div>
  );
}

export default Wrapper;
