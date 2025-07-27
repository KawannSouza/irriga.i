import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#8AC13F] to-[#52A84D] text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-primary-foreground/10 rounded-full">
                <Sparkles className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Chegou a Hora da{" "}
              <span className="text-cta">Agricultura Inteligente</span>{" "}
              para Todos
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed text-primary-foreground/90">
              Junte-se a nós na missão de levar segurança e eficiência para cada 
              pequeno produtor do Maranhão.
            </p>
          </div>
          
          <div className="space-y-6">
            <Button
              size="lg" 
              className="text-xl px-12 py-8 h-auto group bg-gradient-to-r from-[#fafcf6] to-[#d6ffd4] text-green-800"
            >
              <a href="https://w.app/ynwfuz">QUERO FAZER PARTE DA REVOLUÇÃO</a>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-primary-foreground/70">
              * Transforme a agricultura da sua região hoje mesmo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;