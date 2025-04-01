
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
  onButtonClick: () => void;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  featured = false,
  onButtonClick
}: PricingCardProps) => {
  return (
    <Card className={`border ${
      featured ? 'border-gray-600 shadow-lg shadow-gray-100' : 'border-slate-200'
    } relative overflow-hidden`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      <CardHeader className={`pb-6 ${featured ? 'bg-gray-50 border-b border-gray-100' : ''}`}>
        <CardTitle className="flex flex-col items-center">
          <span className="text-xl font-semibold mb-2">{title}</span>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">{price}</span>
            {price !== 'Custom' && <span className="text-slate-500 ml-1">/month</span>}
          </div>
        </CardTitle>
        <p className="text-center text-slate-600">{description}</p>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex">
              <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full ${
            featured ? 'bg-gray-600 hover:bg-gray-700' : ''
          }`} 
          variant={featured ? 'default' : 'outline'}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
