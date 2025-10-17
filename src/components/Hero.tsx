import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <Zap className="w-4 h-4" />
              <span>Solusi Website Tugas Akhir Profesional</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Couurse NITCODE
              </span>
            </h1>
            
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
              Website Tugas Akhir yang Sempurna
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Kami membantu mahasiswa menciptakan website Tugas Akhir yang profesional, responsif, dan berkualitas tinggi. Dari konsep hingga deployment, kami siap mewujudkan visi Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-base">
                Mulai Sekarang
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base hover:border-primary">
                <Code className="w-5 h-5 mr-2" />
                Lihat Portfolio
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Proyek Selesai</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">98%</p>
                <p className="text-sm text-muted-foreground">Kepuasan Klien</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Web Development Illustration" 
              className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
