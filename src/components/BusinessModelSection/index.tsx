import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Heart } from "lucide-react";

const BusinessModelSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Um Modelo{" "}
              <span className="text-green-800">Justo para o Campo</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Acreditamos que a tecnologia deve ser acessível. Por isso, o Irriga.ai chega 
              ao pequeno produtor através de parcerias com quem mais se importa com o seu sucesso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Handshake className="w-8 h-8 text-green-700" />
                </div>
                
                <h3 className="text-xl font-bold text-green-800">
                  Parcerias Estratégicas
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Trabalhamos com cooperativas e empresas que já conhecem e confiam no produtor.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                
                <h3 className="text-xl font-bold text-green-800">
                  Acesso Facilitado
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Tecnologia de ponta chegando ao campo através de canais de confiança.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-green-700" />
                </div>
                
                <h3 className="text-xl font-bold text-700 text-green-800">
                  Impacto Real
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Cada parceria fortalece a agricultura local e melhora vidas.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-cta/5 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Sua Cooperativa ou Empresa quer impulsionar a agricultura local?
                </h3>
                
                <Button size="lg" className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-[#8AC13F] to-[#52A84D]">
                  <a href="https://w.app/ynwfuz">FALE CONOSCO</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;