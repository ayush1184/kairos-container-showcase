import { useState, useEffect, useMemo, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "@/assets/kairos-containers.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = useMemo(() => [
    { name: "Home", href: "#home", id: "home" },
    { name: "Products", href: "#products", id: "products" },
    { name: "Our Process", href: "#process", id: "process" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ], []);

  const productItems = [
    { name: "View All Models", href: "#products", id: "products", isScroll: true },
    { name: "Model 1", href: "/model-1", id: "model-1" },
    { name: "Model 2", href: "/model-2", id: "model-2" },
    { name: "Model 3", href: "/model-3", id: "model-3" },
  ];

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsHovered(false);
      }
    };

    if (isProductsHovered) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsHovered]);

  // Handle scroll events for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if we're out of home page (scrolled past hero section)
      const heroSection = document.getElementById('home');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const isOutOfHome = window.scrollY > heroHeight * 0.8; // Shrink when 80% past hero

      setIsShrunk(isOutOfHome);

      // Enhanced active section detection
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 150; // Increased offset for better detection
      let currentActive = 'home';

      // Check each section to find the most appropriate active one
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          // If we're within the section bounds
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentActive = sections[i];
            break;
          }

          // If we're past the current section but before the next one
          if (scrollPosition >= elementTop && i === sections.length - 1) {
            currentActive = sections[i];
            break;
          }

          // If we're between sections, choose the closest one
          if (scrollPosition < elementTop) {
            if (i === 0) {
              currentActive = sections[0];
            } else {
              const prevElement = document.getElementById(sections[i - 1]);
              if (prevElement) {
                const prevBottom = prevElement.offsetTop + prevElement.offsetHeight;
                const distanceToPrev = Math.abs(scrollPosition - prevBottom);
                const distanceToCurrent = Math.abs(scrollPosition - elementTop);
                currentActive = distanceToPrev < distanceToCurrent ? sections[i - 1] : sections[i];
              }
            }
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    // Initial call to set active section on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (location.pathname === '/') {
      // We're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // We're on a model page, navigate to home first
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'navbar-glass shadow-lg'
        : 'bg-background/95 backdrop-blur-sm border-b border-border'
        } ${isShrunk && !isHovered
          ? 'h-16'
          : 'h-20'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${isShrunk && !isHovered ? 'h-16' : 'h-20'
          }`}>
          {/* Logo */}
          <button
            onClick={() => {
              if (location.pathname === '/') {
                scrollToSection('home');
              } else {
                navigate('/');
              }
            }}
            className="flex items-center group transition-all duration-500 hover:scale-105"
          >
            <img
              src={logoImage}
              alt="KAIROS Containers"
              className={`transition-all duration-500 ${isShrunk && !isHovered ? 'h-8' : 'h-10'} object-contain`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link rounded-lg font-medium transition-all duration-500 ${isShrunk && !isHovered ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'
                  } ${activeSection === item.id
                    ? 'active text-primary'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
              >
                {item.name}
              </button>
            ))}

            {/* Products Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <button
                className={`nav-link rounded-lg font-medium transition-all duration-500 flex items-center space-x-1 ${isShrunk && !isHovered ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'
                  } text-foreground hover:text-primary hover:bg-primary/5`}
                onClick={() => setIsProductsHovered(!isProductsHovered)}
              >
                <span>Models</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProductsHovered && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-[60] animate-slide-down">
                  {productItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.isScroll) {
                          scrollToSection(item.id);
                        } else {
                          navigate(item.href);
                        }
                        setIsProductsHovered(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 hover:bg-primary/5 ${activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                        }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+2817724800"
              className={`flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-500 hover:bg-primary/5 rounded-lg ${isShrunk && !isHovered ? 'px-2 py-1.5' : 'px-3 py-2'
                }`}
            >
              <Phone className={`transition-all duration-500 ${isShrunk && !isHovered ? 'w-3 h-3' : 'w-4 h-4'
                }`} />
              <svg
                className={`transition-all duration-500 ${isShrunk && !isHovered ? 'h-3 w-24' : 'h-4 w-32'}`}
                viewBox="0 0 150 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
              >
                <text
                  x="0"
                  y="15"
                  fontFamily="monospace"
                  fontSize="14"
                  fontWeight="500"
                  fill="currentColor"
                  style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
                >
                  (281)-772-4800
                </text>
              </svg>
            </a>
            <Button
              variant="default"
              onClick={() => scrollToSection('contact')}
              className={`bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-lg transition-all duration-500 ${isShrunk && !isHovered ? 'px-4 py-1.5 text-sm' : 'px-6 py-2'
                }`}
            >
              Quote Request
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-slide-down border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link text-left px-4 py-3 rounded-lg font-medium transition-all duration-500 ${activeSection === item.id
                    ? 'active text-primary'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Models Section for Mobile */}
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Models</div>
                <div className="flex flex-col space-y-1 ml-4">
                  {productItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.isScroll) {
                          scrollToSection(item.id);
                        } else {
                          navigate(item.href);
                        }
                      }}
                      className={`nav-link text-left px-3 py-2 rounded-lg text-sm transition-all duration-500 text-foreground hover:text-primary hover:bg-primary/5`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <a
                  href="tel:+2817724800"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5"
                >
                  <Phone className="w-4 h-4" />
                  <svg
                    className="h-4 w-32"
                    viewBox="0 0 150 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
                  >
                    <text
                      x="0"
                      y="15"
                      fontFamily="monospace"
                      fontSize="14"
                      fontWeight="500"
                      fill="currentColor"
                      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
                    >
                      (281)-772-4800
                    </text>
                  </svg>
                </a>
                <Button
                  variant="default"
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  Quote Request
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
