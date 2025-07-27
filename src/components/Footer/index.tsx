import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800 text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>
              <span className="text-2xl font-bold">Irriga.ai</span>
            </div>
            
            <div className="space-y-4 text-background/80">
              <p className="text-sm">
                © 2025 AgroSapiens - Todos os direitos reservados.
              </p>
              
              <div className="flex justify-center space-x-8">
                <a 
                  href="mailto:parceria@irriga.ai" 
                  className="text-sm hover:text-primary transition-colors"
                >
                  agrosapiens@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;