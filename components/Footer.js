export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full mb-8 mt-4">
      <hr className="w-full border-1 border-gray-100 dark:border-gray-800 mb-8" />
      <h2>footer goes here</h2>
      <FooterGradient />
    </footer>
  );
}

function FooterGradient() {
  return (
    <div className="mx-auto max-w-6xl motion-safe:animate-rotate-colors pointer-events-none z-[-1]">
      <div className="absolute inset-x-0 bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 rounded-t-full opacity-30 blur-3xl h-[200px]" />
    </div>
  );
}
