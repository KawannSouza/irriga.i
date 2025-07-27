import { Droplet, Leaf, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Você ainda está{" "}
            <span className="text-destructive">apostando sua safra</span> contra o clima?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Para milhares de microempreendedores agrícolas no Maranhão, cada dia é uma aposta. 
            Excesso ou falta de irrigação, assim como o desequilíbrio de nutrientes no solo, 
            podem significar desperdício de recursos ou perda da colheita. Essa incerteza constante 
            gera riscos que impedem o crescimento e ameaçam o sustento de famílias inteiras.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <div className="relative">
                  <Droplet className="w-8 h-8 text-primary" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">$</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Desperdício</h3>
              <p className="text-muted-foreground">Uso Ineficiente de Recursos e Insumos</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Perda de Safra</h3>
              <p className="text-muted-foreground">Plantas morrendo por falta ou excesso de nutrientes e água</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Limitação</h3>
              <p className="text-muted-foreground">A ausência de tecnologia moderna ao pequeno produtor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;