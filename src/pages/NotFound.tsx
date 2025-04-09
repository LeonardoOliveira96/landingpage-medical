
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-medical-light-blue">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-medical-dark-blue mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Página não encontrada</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>
          <Link to="/">
            <Button className="bg-medical-dark-blue hover:bg-blue-700">
              Voltar para a Página Inicial
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
