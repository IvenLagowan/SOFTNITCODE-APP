import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "2.5 Juta",
    description: "Cocok untuk proyek sederhana",
    features: [
      "5-7 Halaman",
      "Responsive Design",
      "Basic SEO",
      "1 Bulan Support",
      "Source Code",
    ],
    variant: "outline" as const,
  },
  {
    name: "Professional",
    price: "4.5 Juta",
    description: "Paling populer untuk TA",
    features: [
      "10-15 Halaman",
      "Responsive Design",
      "Advanced SEO",
      "Database Integration",
      "3 Bulan Support",
      "Source Code + Dokumentasi",
      "Free Revisi (2x)",
    ],
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "7 Juta",
    description: "Untuk proyek kompleks",
    features: [
      "Unlimited Halaman",
      "Responsive Design",
      "Premium SEO",
      "Database + API Integration",
      "6 Bulan Support",
      "Source Code + Dokumentasi Lengkap",
      "Unlimited Revisi",
      "Custom Features",
    ],
    variant: "secondary" as const,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Paket <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Harga</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Tugas Akhir Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Paling Populer
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">Rp {plan.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter className="pt-6">
                <Button variant={plan.variant} className="w-full" size="lg">
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
