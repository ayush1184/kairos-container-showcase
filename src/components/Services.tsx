import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wrench, Truck } from "lucide-react";
import residentialImage from "@/assets/residential-container.jpg";
import commercialImage from "@/assets/commercial-container.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Containers",
      description: "Transform containers into beautiful, livable homes with all modern amenities.",
      image: residentialImage,
      link: "#residential"
    },
    {
      icon: Building2,
      title: "Commercial Solutions",
      description: "Professional office spaces, retail shops, and pop-up stores designed for business.",
      image: commercialImage,
      link: "#commercial"
    },
    {
      icon: Wrench,
      title: "Custom Modifications",
      description: "Fully customizable interiors and exteriors to match your exact specifications.",
      link: "#process"
    },
    {
      icon: Truck,
      title: "Delivery & Setup",
      description: "Professional delivery and installation services to ensure a seamless experience.",
      link: "#contact"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive container solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="link" asChild className="p-0 h-auto font-semibold">
                  <a href={service.link}>Learn More →</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
