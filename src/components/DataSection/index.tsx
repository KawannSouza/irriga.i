import { BarChart3, FlaskConical, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DataSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Isso não é achismo,{" "}
              <span className="text-green-800">é ciência</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A tecnologia do Irriga.ai é baseada em fatos comprovados por instituições de renome.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-destructive" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-destructive">Até 50%</h3>
                  <p className="text-sm font-semibold text-destructive/80">de Perda</p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O estresse hídrico pode reduzir a produtividade em mais de 50%.
                </p>
                
                <p className="text-xs text-muted-foreground italic">
                  Fonte: Brevant Sementes
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-100 to-green-100 border-primary/20">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-green-900">pH</h3>
                  <p className="text-sm font-semibold text-primary/80">é Crucial</p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O pH incorreto do solo impede a absorção de nutrientes, mesmo com adubação.
                </p>
                
                <p className="text-xs text-muted-foreground italic">
                  Fonte: Embrapa
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-cta/5 to-cta/10 border-cta/20">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-cta" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-cta">Realidade</h3>
                  <p className="text-sm font-semibold text-cta/80">do Nordeste</p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A seca é a maior causa de perdas na agricultura familiar da região.
                </p>
                
                <p className="text-xs text-muted-foreground italic">
                  Fonte: IPEA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;