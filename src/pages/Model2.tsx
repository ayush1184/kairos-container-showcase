import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Star, Truck, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Gallery from "@/components/Gallery";
import model2HeroImage from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.57.jpg";
import model2Image1 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.59.jpg";
import model2Image2 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.62.jpg";
import model2Image3 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.65.jpg";
import model2Image4 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.70.jpg";
import model2Image5 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.73.jpg";
import model2Video1 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.53.mp4";
import model2Video2 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.54.mp4";
import model2Video3 from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.55.mp4";

const Model2 = () => {
    const navigate = useNavigate();
    useScrollToTop(); // Scroll to top when component mounts

    const images = [model2HeroImage, model2Image1, model2Image2, model2Image3, model2Image4, model2Image5];
    const videos = [model2Video1, model2Video2, model2Video3];

    const features = [
        {
            icon: Shield,
            title: "Commercial Grade",
            description: "Built for business use with enhanced security features"
        },
        {
            icon: Zap,
            title: "Modular Design",
            description: "Flexible layout options for various business needs"
        },
        {
            icon: Truck,
            title: "Quick Deployment",
            description: "Fast setup for pop-up stores and temporary locations"
        }
    ];

    const specifications = [
        { label: "Dimensions", value: "40ft x 8ft x 8.5ft" },
        { label: "Weight", value: "4,200 lbs" },
        { label: "Material", value: "Commercial-grade Steel" },
        { label: "Insulation", value: "R-20 Thermal" },
        { label: "Windows", value: "4 Large Windows" },
        { label: "Doors", value: "2 Main Doors + Security Lock" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={model2HeroImage}
                        alt="Model 2 Container"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
                </div>

                <div className="container relative z-10 px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                            Business Model
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Model 2
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                            40x8x8 Office and Storage - Commercial-grade container perfect for retail, office, and business applications
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
                            Perfect for Business
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Designed specifically for commercial use with business-friendly features
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <feature.icon className="w-8 h-8 text-secondary" />
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
                                    <h3 className="text-2xl font-bold text-foreground mb-6">Business Features</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Enhanced security system",
                                            "Multiple electrical outlets",
                                            "Professional lighting setup",
                                            "Commercial-grade flooring",
                                            "Accessibility compliant",
                                            "Business warranty included"
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-secondary" />
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
                        Ready for Your Business?
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your Model 2 commercial container project and get a personalized quote.
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
            <Gallery images={images} videos={videos} modelName="Model 2" />

            <Footer />
        </div>
    );
};

export default Model2;
