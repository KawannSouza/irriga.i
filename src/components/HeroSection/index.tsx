import { Button } from "@/components/ui/button";
import product from "../../../public/product.jpeg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-accent/20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              A Resposta da Terra na{" "}
              <span className="text-green-700">Palma da Sua Mão</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Irriga.ai é a plataforma de monitoramento inteligente do solo que transforma a incerteza do 
              campo em <span className="font-semibold text-green-700">lucro e segurança</span> para o 
              pequeno agricultor, analisando dados de umidade e nutrientes para decisões mais precisas.
            </p>
            
            <Button size="lg" className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-[#8AC13F] to-[#52A84D]">
              <a href="https://w.app/ynwfuz">QUERO SER UM PARCEIRO</a>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={product.src}
              alt="Sensor Irriga.ai no campo com smartphone" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;