import BenefitsSection from "@/components/BenefitsSection/index"
import BusinessModelSection from "@/components/BusinessModelSection";
import DataSection from "@/components/DataSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

export default function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <ProblemSection />
      </section>
      <section>
        <SolutionSection />
      </section>
      <section>
        <BenefitsSection />
      </section>
      <section>
        <DataSection />
      </section>
      <section>
        <BusinessModelSection />
      </section>
      <section>
        <FinalCTASection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
