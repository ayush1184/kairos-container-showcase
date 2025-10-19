import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import residentialImage from "@/assets/residential-container.jpg";
import commercialImage from "@/assets/commercial-container.jpg";
import heroImage from "@/assets/hero-container.jpg";

const Models = () => {
  const navigate = useNavigate();

  const models = [
    {
      id: "model-1",
      name: "Model 1",
      badge: "Premium Model",
      description: "Premium residential container with modern amenities and luxury finishes",
      image: heroImage,
      features: ["Marine-grade Steel", "R-15 Insulation", "2 Large Windows", "Weather Resistant"],
      price: "Starting at $45,000"
    },
    {
      id: "model-2",
      name: "Model 2",
      badge: "Business Model",
      description: "Commercial-grade container perfect for retail, office, and business applications",
      image: residentialImage,
      features: ["Commercial-grade Steel", "R-20 Insulation", "4 Large Windows", "Enhanced Security"],
      price: "Starting at $65,000"
    },
    {
      id: "model-3",
      name: "Model 3",
      badge: "Luxury Model",
      description: "Luxury container home with premium finishes and smart technology integration",
      image: commercialImage,
      features: ["Premium Steel + Wood", "R-25 Insulation", "6 Panoramic Windows", "Smart Technology"],
      price: "Starting at $85,000"
    }
  ];

  return (
    <>
      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Container Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of premium container solutions designed for different needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card
                key={model.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 hover:border-primary/20"
                onClick={() => navigate(`/${model.id}`)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {model.badge}
                  </Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{model.name}</h3>
                    <p className="text-lg font-semibold text-primary-foreground/90">{model.price}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {model.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    variant="outline"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
