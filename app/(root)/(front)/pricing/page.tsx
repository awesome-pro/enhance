import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: '$9',
              features: [
                'Basic profile customization',
                '1 unique link',
                'Monthly analytics report',
              ],
            },
            {
              name: 'Professional',
              price: '$29',
              features: [
                'Advanced profile customization',
                '3 unique links',
                'Weekly analytics report',
                'Priority support',
              ],
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              features: [
                'Full white-label solution',
                'Unlimited links',
                'Real-time analytics',
                'Dedicated account manager',
              ],
            },
          ].map((plan, index) => (
            <Card key={index} className={index === 1 ? 'border-primary' : ''}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-sm font-normal">/month</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {index === 2 ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
