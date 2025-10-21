const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            OUR STORY
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Founded with a vision to standardize the use of shipping containers,
              <strong className="text-primary"> Kairos Container</strong> was created to transform these
              industrial structures into high-quality, functional spaces for both residential and commercial use.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We believe that shipping containers offer an innovative, sustainable, and cost-effective
              solution for modern construction needs. Our team of designers and craftsmen
              work tirelessly to ensure each container is customized to meet each clients' unique requirements.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              From cozy tiny homes, sophisticated office spaces, to storage facilities and more. we pride ourselves on delivering
              exceptional quality and attention to detail in every project. All while being portable and movable anywhere in the World. At Kairos Container, we're
              not just building containers – we're creating spaces where life, work and convenience thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
