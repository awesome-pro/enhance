import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Briefcase, CheckCircle, Globe } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Showcase Achievements',
    description: 'Highlight your awards and recognition in an eye-catching format.'
  },
  {
    icon: Briefcase,
    title: 'Professional Experience',
    description: 'Present your work history with rich details and visual timelines.'
  },
  {
    icon: CheckCircle,
    title: 'Certifications & Skills',
    description: 'Display your qualifications and expertise in an interactive manner.'
  },
  {
    icon: Globe,
    title: 'Global Visibility',
    description: 'Increase your online presence with a shareable, SEO-friendly profile.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose enhance.io?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}