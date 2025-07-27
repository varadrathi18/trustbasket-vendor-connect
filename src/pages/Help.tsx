import { BookOpen, CreditCard, TrendingUp, Users, Gift, Building } from "lucide-react";

export const Help = () => {
  const helpTopics = [
    {
      id: "about",
      title: "What is TrustBasket?",
      icon: <BookOpen className="text-primary" size={32} />,
      description: "Learn about our mission to connect street vendors with trusted suppliers",
      content: "TrustBasket is a marketplace platform that connects street food vendors with raw material suppliers. We focus on building trust, providing affordable prices, and enabling credit access for small businesses."
    },
    {
      id: "credit",
      title: "How Credit Works",
      icon: <CreditCard className="text-success" size={32} />,
      description: "Understand our trust-based credit system",
      content: "Our credit system is based on building trust through successful transactions. After 3 completed purchases from the same supplier, you become eligible for credit. You pay a portion upfront and the balance within 7 days."
    },
    {
      id: "trust-score",
      title: "Tips to Increase Trust Score",
      icon: <TrendingUp className="text-warning" size={32} />,
      description: "Learn how to build and maintain a high trust score",
      content: "Your trust score increases with: timely payments, successful transactions, profile completeness, positive supplier feedback, and consistent business activity. Maintain above 80% for best credit terms."
    },
    {
      id: "combos",
      title: "Create Combos that Sell",
      icon: <Gift className="text-purple-600" size={32} />,
      description: "Best practices for suppliers to create attractive combo deals",
      content: "Successful combos include complementary products, offer 10-20% savings, target specific food types (like 'Pav Bhaji Starter Pack'), and include popular items. Bundle slow-moving items with fast sellers."
    },
    {
      id: "vendors",
      title: "Govt Schemes for Vendors",
      icon: <Building className="text-blue-600" size={32} />,
      description: "Information about government support programs",
      content: "PM SVANidhi Scheme provides ₹10,000 loans for street vendors. Mudra Loans offer up to ₹50,000 for micro-enterprises. State governments also provide licensing support and designated vending zones."
    },
    {
      id: "community",
      title: "Vendor Community",
      icon: <Users className="text-indigo-600" size={32} />,
      description: "Connect with other vendors and share experiences",
      content: "Join our vendor WhatsApp groups by city, attend monthly meetups, share business tips, and learn from successful vendors. Community support helps everyone grow together."
    }
  ];

  const faqs = [
    {
      question: "How do I become eligible for credit?",
      answer: "Complete 3 successful transactions with any supplier. Once achieved, you'll see 'Request on Credit' options when shopping."
    },
    {
      question: "What happens if I can't pay credit on time?",
      answer: "Late payments affect your trust score and may restrict future credit access. Contact suppliers directly to discuss payment plans."
    },
    {
      question: "How are suppliers verified?",
      answer: "All suppliers must provide business licenses, GST registration (if applicable), and undergo document verification before joining."
    },
    {
      question: "Can I change my delivery address?",
      answer: "Yes, you can update your business address in profile settings. Some suppliers may have delivery area restrictions."
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using TrustBasket successfully
          </p>
        </div>

        {/* Help Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {helpTopics.map((topic) => (
            <div key={topic.id} className="trust-card hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
              <p className="text-muted-foreground mb-4">{topic.description}</p>
              <p className="text-sm">{topic.content}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="trust-card">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16 py-12 bg-primary rounded-lg">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Still Need Help?
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Our support team is here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors">
              WhatsApp Support
            </button>
            <button className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors">
              Email Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};