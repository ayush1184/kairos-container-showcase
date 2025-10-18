import { Shield, Leaf, Zap, DollarSign, Clock, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Built to Last",
      description: "Weather-resistant steel construction designed for durability"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable building solution using recycled materials"
    },
    {
      icon: Zap,
      title: "Quick Installation",
      description: "Faster construction time compared to traditional buildings"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Affordable alternative without compromising quality"
    },
    {
      icon: Clock,
      title: "Customizable Timeline",
      description: "Flexible project schedules to meet your deadlines"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Premium finishes and materials in every project"
    }
  ];

  return (
    <section id="process" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Kairos Container?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We combine innovation, sustainability, and craftsmanship to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
