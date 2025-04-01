
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import HeroImage from '@/components/landing/HeroImage';
import FeatureCard from '@/components/landing/FeatureCard';
import PricingCard from '@/components/landing/PricingCard';
import Navbar from '@/components/landing/Navbar';

const Index = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleStartTrial = () => {
    navigate('/login', { state: { email } });
  };

  const features = [
    {
      title: 'Powerful Dashboard',
      description: 'Get a comprehensive view of your business metrics in one place.',
      icon: 'bar-chart',
    },
    {
      title: 'Team Collaboration',
      description: 'Work together with your team in real-time with shared workspaces.',
      icon: 'users',
    },
    {
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with our advanced analytics tools.',
      icon: 'pie-chart',
    },
  ];

  const pricingPlans = [
    {
      title: 'Starter',
      price: '$19',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        '5GB storage',
        'Email support',
      ],
      buttonText: 'Start Free Trial',
      featured: false,
    },
    {
      title: 'Professional',
      price: '$49',
      description: 'For growing businesses and teams',
      features: [
        'Unlimited team members',
        'Advanced analytics',
        '25GB storage',
        'Priority support',
        'Custom integrations',
      ],
      buttonText: 'Start Free Trial',
      featured: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Advanced security features',
        'Dedicated account manager',
        '24/7 phone support',
        'SLA guarantees',
      ],
      buttonText: 'Contact Sales',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Build SaaS products faster than ever
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
              A complete starter kit with authentication, dashboard, and everything you need
              to launch your next SaaS product quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex-1 max-w-md">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button 
                size="lg" 
                onClick={handleStartTrial}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to scale
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform provides all the tools you need to build, launch, and grow your SaaS business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No hidden fees or complicated pricing structures.
            Choose the plan that works for your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard 
              key={plan.title}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              featured={plan.featured}
              onButtonClick={handleStartTrial}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join thousands of companies using our platform to grow their business.
          </p>
          <Button 
            size="lg" 
            onClick={handleStartTrial}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-slate-900">SaaS Starter Kit</p>
            <p className="text-sm text-slate-500">© 2023. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-600 hover:text-blue-600">Terms</a>
            <a href="#" className="text-sm text-slate-600 hover:text-blue-600">Privacy</a>
            <a href="#" className="text-sm text-slate-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
