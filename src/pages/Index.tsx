import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Question {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const questionsData: Question[] = [
  {
    id: '1',
    category: 'Getting Started',
    question: 'How do I create my first account?',
    answer: 'Click the "Sign Up" button in the top right corner, enter your email address and create a password. You\'ll receive a verification email to confirm your account.',
  },
  {
    id: '2',
    category: 'Getting Started',
    question: 'What are the system requirements?',
    answer: 'Our platform works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience. Mobile apps are available for iOS 14+ and Android 10+.',
  },
  {
    id: '3',
    category: 'Getting Started',
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all premium features. No credit card required to start your trial.',
  },
  {
    id: '4',
    category: 'Account',
    question: 'How do I reset my password?',
    answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you a secure link to reset your password. The link expires after 24 hours.',
  },
  {
    id: '5',
    category: 'Account',
    question: 'Can I change my email address?',
    answer: 'Yes, go to Settings > Account > Email Address. Enter your new email and confirm it. You\'ll need to verify the new email address before the change takes effect.',
  },
  {
    id: '6',
    category: 'Account',
    question: 'How do I delete my account?',
    answer: 'Navigate to Settings > Account > Delete Account. Please note that this action is permanent and will remove all your data from our servers.',
  },
  {
    id: '7',
    category: 'Billing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.',
  },
  {
    id: '8',
    category: 'Billing',
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely! You can change your plan at any time from the Billing section. Upgrades take effect immediately, while downgrades apply at the end of your current billing cycle.',
  },
  {
    id: '9',
    category: 'Billing',
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact our support team within 30 days of purchase for a full refund.',
  },
  {
    id: '10',
    category: 'Features',
    question: 'How do I export my data?',
    answer: 'Go to Settings > Data > Export. Choose your preferred format (CSV, JSON, or PDF) and click Export. You\'ll receive a download link via email within a few minutes.',
  },
  {
    id: '11',
    category: 'Features',
    question: 'Is there an API available?',
    answer: 'Yes! Our REST API is available on all paid plans. You can find detailed documentation, code examples, and authentication guides in our Developer Portal.',
  },
  {
    id: '12',
    category: 'Features',
    question: 'Can I integrate with other tools?',
    answer: 'We offer native integrations with over 50 popular tools including Slack, Google Workspace, Microsoft Teams, Zapier, and more. Check our Integrations page for the full list.',
  },
  {
    id: '13',
    category: 'Security',
    question: 'How is my data protected?',
    answer: 'We use industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit. All our servers are hosted in SOC 2 compliant data centers with regular security audits.',
  },
  {
    id: '14',
    category: 'Security',
    question: 'Do you offer two-factor authentication?',
    answer: 'Yes, we strongly recommend enabling 2FA. You can set it up in Settings > Security using authenticator apps like Google Authenticator or Authy.',
  },
  {
    id: '15',
    category: 'Security',
    question: 'Where are your servers located?',
    answer: 'Our primary servers are located in US-East (Virginia) and EU-West (Ireland). Enterprise customers can choose their preferred region for data residency compliance.',
  },
  {
    id: '16',
    category: 'Support',
    question: 'How can I contact support?',
    answer: 'Our support team is available 24/7 via live chat, email (support@example.com), or phone. Premium customers get priority support with guaranteed response times.',
  },
  {
    id: '17',
    category: 'Support',
    question: 'Do you provide training?',
    answer: 'Yes! We offer free video tutorials, comprehensive documentation, and weekly live webinars. Enterprise customers receive personalized onboarding and training sessions.',
  },
  {
    id: '18',
    category: 'Support',
    question: 'What is your average response time?',
    answer: 'For standard support, we typically respond within 4 hours during business hours. Premium support receives responses within 1 hour, and critical issues are handled immediately.',
  },
];

const categories = ['All', 'Getting Started', 'Account', 'Billing', 'Features', 'Security', 'Support'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredQuestions = questionsData.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryCount = (cat: string) => {
    if (cat === 'All') return questionsData.length;
    return questionsData.filter((q) => q.category === cat).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Icon name="HelpCircle" size={32} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Help Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions and get the help you need
          </p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Icon
              name="Search"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-base rounded-xl shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
            )}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                className="rounded-full transition-all"
                size="sm"
              >
                {category}
                <span className={`ml-2 text-xs ${selectedCategory === category ? 'opacity-70' : 'opacity-50'}`}>
                  {categoryCount(category)}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground text-center">
            {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'} found
          </p>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <Icon name="SearchX" size={40} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No results found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              variant="outline"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <Accordion type="single" collapsible className="space-y-3">
            {filteredQuestions.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-border rounded-xl bg-card overflow-hidden hover:shadow-sm transition-all animate-fade-in"
                style={{
                  animationDelay: `${index * 30}ms`,
                }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left group">
                  <div className="flex items-start gap-4 w-full pr-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <div className="pl-6 border-l-2 border-border ml-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <div className="mt-20 text-center bg-muted/30 rounded-2xl p-10 animate-fade-in">
          <Icon name="MessageCircleQuestion" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our support team is here to help you 24/7
          </p>
          <Button size="lg" className="rounded-xl">
            <Icon name="Send" size={18} className="mr-2" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
