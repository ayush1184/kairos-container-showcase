import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Star, Truck, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Gallery from "@/components/Gallery";
import model1HeroImage from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.46.jpg";
import model1Image1 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.47.jpg";
import model1Image2 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.48.jpg";
import model1Image3 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.49.jpg";
import model1Image4 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.50.jpg";
import model1Image5 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.51.jpg";
import model1Video1 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.37.mp4";
import model1Video2 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.38.mp4";
import model1Video3 from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.43.mp4";

const Model1 = () => {
    const navigate = useNavigate();

    const images = [model1HeroImage, model1Image1, model1Image2, model1Image3, model1Image4, model1Image5];
    const videos = [model1Video1, model1Video2, model1Video3];

    const features = [
        {
            icon: Shield,
            title: "Weather Resistant",
            description: "Built with marine-grade steel for maximum durability"
        },
        {
            icon: Zap,
            title: "Quick Installation",
            description: "Ready-to-use design with minimal setup time"
        },
        {
            icon: Truck,
            title: "Easy Transport",
            description: "Designed for easy relocation and transportation"
        }
    ];

    const specifications = [
        { label: "Dimensions", value: "40ft x 8ft x 8.5ft" },
        { label: "Weight", value: "2,500 lbs" },
        { label: "Material", value: "Marine-grade Steel" },
        { label: "Insulation", value: "R-15 Thermal" },
        { label: "Windows", value: "2 Large Windows" },
        { label: "Doors", value: "1 Main Door + 1 Side Door" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={model1HeroImage}
                        alt="Model 1 Container"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
                </div>

                <div className="container relative z-10 px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Premium Model
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Model 1
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                            40x8x8 Living Space - Premium residential container with modern amenities and luxury finishes
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="text-lg px-8 py-6 font-semibold"
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
                            Why Choose Model 1?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Premium features and luxury finishes designed for the modern lifestyle
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
                                                <span className="text-muted-foreground">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-8">
                                <CardContent className="p-0">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Included Features</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Fully insulated walls and ceiling",
                                            "Electrical outlets and lighting",
                                            "HVAC system ready",
                                            "Waterproof flooring",
                                            "Security locks",
                                            "Warranty included"
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
                        Contact us today to discuss your Model 1 container project and get a personalized quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-lg px-8 py-6 font-semibold"
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
            <Gallery images={images} videos={videos} modelName="Model 1" />

            <Footer />
        </div>
    );
};

export default Model1;
