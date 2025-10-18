import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/residential-container.jpg";
import commercialImage from "@/assets/commercial-container.jpg";

const Models = () => {
  return (
    <>
      {/* Residential Section */}
      <section id="residential" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={residentialImage}
                alt="Residential container home interior"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Residential Models
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Transform your vision of a perfect home into reality with our custom residential 
                container solutions. From cozy tiny homes to spacious multi-container estates, 
                we create comfortable, modern living spaces that are both sustainable and stylish.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Custom floor plans tailored to your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Premium insulation for year-round comfort</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Modern finishes and high-quality materials</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Energy-efficient windows and doors</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="#contact">Request Residential Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section id="commercial" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Commercial Models
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Elevate your business with our innovative commercial container solutions. 
                Perfect for offices, retail spaces, cafes, and pop-up shops, our containers 
                offer flexible, cost-effective alternatives to traditional commercial real estate.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Professional workspace design and layout</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Climate control and electrical systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Scalable solutions that grow with your business</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Quick installation with minimal disruption</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="#contact">Request Commercial Quote</a>
              </Button>
            </div>
            <div>
              <img
                src={commercialImage}
                alt="Commercial container office space"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Models;
