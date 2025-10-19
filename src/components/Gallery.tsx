import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
    images: string[];
    videos: string[];
    modelName: string;
}

const Gallery = ({ images, videos, modelName }: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openImageModal = (image: string, index: number) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const openVideoModal = (video: string) => {
        setSelectedVideo(video);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="gallery" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        {modelName} Gallery
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore detailed views and videos of our {modelName} container
                    </p>
                </div>

                {/* Images Section */}
                {images.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                            Photo Gallery
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((image, index) => (
                                <Card
                                    key={index}
                                    className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                                    onClick={() => openImageModal(image, index)}
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`${modelName} view ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Badge className="bg-white/90 text-black">
                                                    Click to enlarge
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Videos Section */}
                {videos.length > 0 && (
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                            Video Gallery
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videos.map((video, index) => (
                                <Card
                                    key={index}
                                    className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                                    onClick={() => openVideoModal(video)}
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <video
                                            className="w-full h-full object-cover"
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source src={video} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-8 h-8 text-black ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <Badge className="bg-white/90 text-black">
                                                Click to play
                                            </Badge>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Image Modal */}
                <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
                    <DialogContent className="max-w-6xl max-h-[90vh] p-0">
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                                onClick={closeImageModal}
                            >
                                <X className="w-6 h-6" />
                            </Button>

                            {selectedImage && (
                                <div className="relative">
                                    <img
                                        src={images[currentImageIndex]}
                                        alt={`${modelName} view ${currentImageIndex + 1}`}
                                        className="w-full h-auto max-h-[80vh] object-contain"
                                    />

                                    {images.length > 1 && (
                                        <>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                                                onClick={prevImage}
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                                                onClick={nextImage}
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </Button>
                                        </>
                                    )}

                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-black/50 text-white">
                                            {currentImageIndex + 1} of {images.length}
                                        </Badge>
                                    </div>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Video Modal */}
                <Dialog open={!!selectedVideo} onOpenChange={closeVideoModal}>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                                onClick={closeVideoModal}
                            >
                                <X className="w-6 h-6" />
                            </Button>

                            {selectedVideo && (
                                <video
                                    className="w-full h-auto max-h-[80vh]"
                                    controls
                                    autoPlay
                                    loop
                                >
                                    <source src={selectedVideo} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Gallery;
