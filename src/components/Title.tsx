export function Title({ children }) {
  return (
    <div className="relative">
      <h1 className="max-w-5xl text-2xl font-black text-center text-slate-100/90 sm:text-4xl md:text-5xl lg:text-6xl">
        {children}
      </h1>
      <span className="block h-1 mb-2 rounded-lg w-s10 bg-emerald-500" />
    </div>
  );
}
