import { Smartphone, Cpu, Antenna } from "lucide-react";
import mockup from "../../../public/mockup.png"

const SolutionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Pare de Apostar.{" "}
              <span className="text-primary">Comece a Decidir.</span>
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-primary">
              Apresentamos o Irriga.ai, o ecossistema que te devolve o controle.
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Nós combinamos um sensor de baixo custo, que lê a saúde real do seu solo, 
              com um aplicativo inteligente que funciona sem internet. 
              Ele não te dá gráficos complicados, ele te dá a resposta que você precisa:{" "}
              <span className="font-bold text-primary">sim ou não</span>.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 bg-accent rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Sensor Inteligente</h4>
                  <p className="text-muted-foreground">Monitora umidade, pH e temperatura do solo</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <Antenna className="w-8 h-8 text-primary animate-pulse" />
              </div>
              
              <div className="flex items-center space-x-6 p-6 bg-green-100 rounded-lg">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-cta-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-800">App Simples</h4>
                  <p className="text-muted-foreground">Funciona offline e te dá respostas claras</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img
                src={mockup.src}
                alt="Diagrama da solução Irriga.ai" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;