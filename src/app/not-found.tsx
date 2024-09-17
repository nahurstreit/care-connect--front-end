import Header from "@/components/Header";
import Navbar from "@/components/Navbar/Navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-between min-h-screen antialiased">
      <Header />
      <div className='flex flex-col items-center justify-center flex-grow gap-4 text-center pb-12 pt-8'>
        <span className="text-red-600 text-3xl font-bold">Ops!</span>
        <div>
          <img src='not-found.svg' alt='Página não encontrada' />
        </div>
        <span className="text-red-600 text-xl font-medium">Página não encontrada...</span>
      </div>
      <Navbar />
    </div>
  );
}
