import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Truck, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Gallery from "@/components/Gallery";
import standardUnitsHeroImage from "@/assets/models/standard-units/40ft-High-Cube-New-beige.webp";
import standardUnitsImage1 from "@/assets/models/standard-units/20 ft grey n1t.jpg";
import standardUnitsImage2 from "@/assets/models/standard-units/20 n1t beige standard.jpg";
import standardUnitsImage3 from "@/assets/models/standard-units/new 20 beige.jpg";
import standardUnitsImage4 from "@/assets/models/standard-units/40 hc beige n1t.png";
import standardUnitsImage5 from "@/assets/models/standard-units/40-HC n1t grey.webp";
import standardUnitsImage6 from "@/assets/models/standard-units/40FT-HC black backgroung.jpg";

const StandardUnits = () => {
    const navigate = useNavigate();
    useScrollToTop(); // Scroll to top when component mounts

    const images = [standardUnitsHeroImage, standardUnitsImage1, standardUnitsImage2, standardUnitsImage3, standardUnitsImage4, standardUnitsImage5, standardUnitsImage6];
    const videos: string[] = []; // No videos for standard units

    const features = [
        {
            icon: Shield,
            title: "Durable Construction",
            description: "Built with marine-grade steel for maximum durability and longevity"
        },
        {
            icon: Zap,
            title: "Versatile Options",
            description: "Available in 20ft and 40ft High Cube configurations with multiple color options"
        },
        {
            icon: Truck,
            title: "Easy Transport",
            description: "Standard shipping container design allows for easy relocation and transportation"
        }
    ];

    const specifications = [
        { label: "Available Sizes", value: "20ft x 8ft x 8.5ft, 40ft x 8ft x 9.5ft (High Cube)" },
        { label: "Standard Weight", value: "2,200 lbs (20ft), 4,000 lbs (40ft)" },
        { label: "Material", value: "Marine-grade Steel" },
        { label: "Color Options", value: "Grey, Beige, Black" },
        { label: "Design", value: "Standard Shipping Container" },
        { label: "Customization", value: "Available upon request" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={standardUnitsHeroImage}
                        alt="Standard Units Container"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
                </div>

                <div className="container relative z-10 px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Standard Units
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Standard Units
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                            High-quality standard shipping containers available in 20ft and 40ft High Cube configurations with multiple color options for various applications
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
                            Why Choose Standard Units?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Reliable, versatile standard shipping containers perfect for storage, transport, and customization projects
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <feature.icon className="w-8 h-8 text-primary" />
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
                                                <span className="text-muted-foreground text-right">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-8">
                                <CardContent className="p-0">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Available Options</h3>
                                    <div className="space-y-3">
                                        {[
                                            "20ft Standard Containers (Grey, Beige)",
                                            "40ft High Cube Containers (Grey, Beige, Black)",
                                            "Weather-resistant construction",
                                            "Standard shipping container certification",
                                            "Easy stacking and transportation",
                                            "Custom modifications available"
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-primary" />
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
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your standard container needs and get a personalized quote.
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
            <Gallery images={images} videos={videos} modelName="Standard Units" />

            <Footer />
        </div>
    );
};

export default StandardUnits;

