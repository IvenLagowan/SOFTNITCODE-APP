import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Siap Wujudkan Website Tugas Akhir Impian Anda?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Konsultasi gratis untuk membahas kebutuhan proyek Anda. Dapatkan estimasi harga dan timeline yang jelas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none text-base shadow-xl hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm border-primary-foreground/20 text-base shadow-xl hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Kami
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-12 text-primary-foreground/80">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">2-4 Minggu</p>
              <p className="text-sm">Waktu Pengerjaan</p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-foreground">Gratis</p>
              <p className="text-sm">Konsultasi</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;
