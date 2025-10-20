import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Star, Truck, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Gallery from "@/components/Gallery";
import model3HeroImage from "@/assets/models/model3/20x8x8Angle.77.jpg";
import model3Image1 from "@/assets/models/model3/20x8x8Angle.79.jpg";
import model3Image2 from "@/assets/models/model3/20x8x8Angle.81.jpg";
import model3Image3 from "@/assets/models/model3/20x8x8Angle.86.jpg";
import model3Image4 from "@/assets/models/model3/20x8x8Angle.92.jpg";
import model3Image5 from "@/assets/models/model3/20x8x8Angle.94.jpg";
import model3Video1 from "@/assets/models/model3/20x8x8video.74.mp4";
import model3Video2 from "@/assets/models/model3/20x8x8video.75.mp4";
import model3Video3 from "@/assets/models/model3/20x8x8video.95.mp4";

const Model3 = () => {
    const navigate = useNavigate();
    useScrollToTop(); // Scroll to top when component mounts

    const images = [model3HeroImage, model3Image1, model3Image2, model3Image3, model3Image4, model3Image5];
    const videos = [model3Video1, model3Video2, model3Video3];

    const features = [
        {
            icon: Shield,
            title: "Luxury Finish",
            description: "Premium materials and high-end finishes throughout"
        },
        {
            icon: Zap,
            title: "Smart Technology",
            description: "Integrated smart home features and automation"
        },
        {
            icon: Truck,
            title: "Custom Design",
            description: "Fully customizable to match your exact specifications"
        }
    ];

    const specifications = [
        { label: "Dimensions", value: "20ft x 8ft x 8.5ft" },
        { label: "Weight", value: "5,800 lbs" },
        { label: "Material", value: "Premium Steel + Wood" },
        { label: "Insulation", value: "R-25 Thermal" },
        { label: "Windows", value: "6 Panoramic Windows" },
        { label: "Doors", value: "2 French Doors + Smart Lock" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={model3HeroImage}
                        alt="Model 3 Container"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
                </div>

                <div className="container relative z-10 px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                            Luxury Model
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Model 3
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                            20x8x8 Office - Luxury container home with premium finishes and smart technology integration
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="text-lg px-8 py-6 font-semibold"
                                onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                            >
                                Get Quote
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-6 font-semibold bg-white/10 text-white border-white hover:bg-white hover:text-primary"
                                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Luxury Living Redefined
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Experience the ultimate in container living with premium materials and smart technology
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <feature.icon className="w-8 h-8 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
                            Specifications
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-8">
                                <CardContent className="p-0">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Technical Details</h3>
                                    <div className="space-y-4">
                                        {specifications.map((spec, index) => (
                                            <div key={index} className="flex justify-between items-center py-2 border-b border-border/50">
                                                <span className="font-medium text-foreground">{spec.label}</span>
                                                <span className="text-muted-foreground">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-8">
                                <CardContent className="p-0">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Luxury Features</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Smart home automation system",
                                            "Premium hardwood flooring",
                                            "High-end kitchen appliances",
                                            "Luxury bathroom fixtures",
                                            "Energy-efficient HVAC",
                                            "Lifetime warranty included"
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-accent" />
                                                <span className="text-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready for Luxury Living?
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your Model 3 luxury container project and get a personalized quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-lg px-8 py-6 font-semibold"
                            onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                        >
                            Contact Us
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 py-6 font-semibold bg-white/10 text-white border-white hover:bg-white hover:text-primary"
                            onClick={() => navigate('/')}
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Home
                        </Button>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery images={images} videos={videos} modelName="Model 3" />

            <Footer />
        </div>
    );
};

export default Model3;
