import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-canvas text-ink">
      <Header />
      <div className="relative z-[1] flex w-full flex-1 flex-col items-center pb-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
