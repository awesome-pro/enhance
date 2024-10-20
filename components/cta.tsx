import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Professional Profile?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using enhance.io to showcase their achievements and advance their careers.
        </p>
        <Button size="lg" variant="secondary" className="text-lg">
          Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}