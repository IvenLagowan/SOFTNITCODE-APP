import { Code2, Mail, MessageCircle, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NITCODE
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Solusi profesional untuk website Tugas Akhir Anda. Wujudkan proyek impian dengan teknologi terkini.
            </p>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Layanan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-primary cursor-pointer transition-colors">UI/UX Design</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Database Design</li>
              <li className="hover:text-primary cursor-pointer transition-colors">API Integration</li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Tentang Kami</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Portfolio</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Testimoni</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Kontak</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Github className="w-4 h-4" />
                <span>Github</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Couurse NITCODE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
