
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-conference-blue text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Join DDD Workshop 2025?</h2>
            <p className="opacity-90 text-lg">
              Reserve your spot today and be part of the most innovative tech conference of the year. Early-bird pricing available until December 1st.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button size="lg" className="btn-gradient text-white hover:opacity-90 transition-opacity text-lg">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
