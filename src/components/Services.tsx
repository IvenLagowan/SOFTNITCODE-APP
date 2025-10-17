import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Rocket, Shield, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Pembuatan website tugas akhir dengan teknologi modern dan clean code yang mudah dipahami.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik, intuitif, dan sesuai dengan kebutuhan proyek Anda.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Website yang tampil sempurna di semua perangkat, dari desktop hingga mobile.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimasi performa untuk loading yang cepat dan pengalaman pengguna yang smooth.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Implementasi keamanan terbaik untuk melindungi data dan informasi aplikasi Anda.",
  },
  {
    icon: Rocket,
    title: "Deployment Support",
    description: "Bantuan deployment dan hosting agar website Anda langsung bisa diakses online.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Layanan <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan website Tugas Akhir Anda dengan standar industri
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/50 bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
