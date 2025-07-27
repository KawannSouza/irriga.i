import { Droplet, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Mais do que Dados,{" "}
              <span className="text-green-800">Resultados</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Droplet className="w-8 h-8 text-green-700" />
                </div>
                
                <h3 className="text-xl font-bold text-green-800">
                  Economia Real
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Use até <span className="font-bold text-green-900">50% menos água e energia</span>, 
                  irrigando apenas quando a planta realmente precisa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-green-700" />
                </div>
                
                <h3 className="text-xl font-bold text-green-800">
                  Aumento da Produtividade
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Garanta que sua lavoura nunca sofra com estresse hídrico e insuficiencia de nutrientes e{" "}
                  <span className="font-bold text-green-900">aumente o volume da sua colheita</span>.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-green-700" />
                </div>
                
                <h3 className="text-xl font-bold text-green-800">
                  Segurança e Paz de Espírito
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Acabe com a angústia da incerteza. Tome{" "}
                  <span className="font-bold text-green-900">decisões baseadas em fatos</span>, não em suposições.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;