import { Award, Clock, HeadphonesIcon, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Kami memahami deadline Anda. Pengerjaan efisien tanpa mengurangi kualitas.",
  },
  {
    icon: Award,
    title: "Kualitas Terjamin",
    description: "Code yang bersih, dokumentasi lengkap, dan hasil yang profesional.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Berkelanjutan",
    description: "Bantuan teknis dan konsultasi bahkan setelah proyek selesai.",
  },
  {
    icon: TrendingUp,
    title: "Teknologi Modern",
    description: "Menggunakan framework dan tools terkini untuk hasil terbaik.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Mengapa Pilih <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kami?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman dan dedikasi kami untuk kesuksesan Tugas Akhir Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 p-6 rounded-2xl hover:bg-card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
