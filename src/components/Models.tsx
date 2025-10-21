import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import model1Image from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.46.jpg";
import model2Image from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.57.jpg";
import model3Image from "@/assets/models/model3/20x8x8Angle.77.jpg";

const Models = () => {
  const navigate = useNavigate();

  const models = [
    {
      id: "model-1",
      name: "Model 1",
      badge: "Residential 40 Model",
      description: "Premium residential container with modern amenities and luxury finishes",
      image: model1Image,
      features: ["Marine grade steel", "High quality closed cell spray foam insulation", "Energy efficient doors and windows", "Smart Technology", "Weather Resistant"]
    },
    {
      id: "model-2",
      name: "Model 2",
      badge: "Office - Storage Model",
      description: "Commercial-grade container perfect for retail, office, and business applications",
      image: model2Image,
      features: ["Marine grade steel", "High quality closed cell spray foam insulation", "Energy efficient doors and windows", "Smart Technology", "Weather Resistant"]
    },
    {
      id: "model-3",
      name: "Model 3",
      badge: "Office - Restroom 20 Model",
      description: "Luxury container office with premium finishes and smart technology integration",
      image: model3Image,
      features: ["Marine grade steel", "High quality closed cell spray foam insulation", "Energy efficient doors and windows", "Smart Technology", "Weather Resistant"]
    }
  ];

  return (
    <>
      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Container Model Samples
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of container solutions designs or let your imagination go and we will design and build your exact needs
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

          {/* Quote Request Button */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-lg transition-all duration-500 px-8 py-4 text-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const offsetTop = contactSection.offsetTop - 80; // Account for navbar height
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Request Your Container Quote
            </Button>
          </div>
        </div>
      </section>

    </>
  );
};

export default Models;
