import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">KAIROS</span>
                <span className="text-xs tracking-wider opacity-80">CONTAINER</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Transforming shipping containers into exceptional living and working spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#residential" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Residential
                </a>
              </li>
              <li>
                <a href="#commercial" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">
                <a href="tel:+1234567890" className="hover:opacity-100 transition-opacity">
                  (123) 456-7890
                </a>
              </li>
              <li className="text-sm opacity-80">
                <a href="mailto:info@kairoscontainer.com" className="hover:opacity-100 transition-opacity">
                  info@kairoscontainer.com
                </a>
              </li>
              <li className="text-sm opacity-80">Serving Nationwide</li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
            <p className="text-sm opacity-80">
              © {currentYear} Kairos Container. All rights reserved.
            </p>
            <p className="text-xs opacity-60">
              Made by Ayush Singh
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
