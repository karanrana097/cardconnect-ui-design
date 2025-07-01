
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const navigate = useNavigate();

  const featuredDeals = [
    {
      id: 1,
      store: "Flipkart",
      title: "Big Billion Days Sale",
      discount: "Up to 80% OFF",
      image: "🛍️"
    },
    {
      id: 2,
      store: "Amazon",
      title: "Prime Day Special",
      discount: "Extra 20% Cashback",
      image: "📦"
    }
  ];

  const offers = [
    {
      id: 1,
      product: "iPhone 15 Pro",
      originalPrice: "₹1,34,900",
      discountedPrice: "₹1,20,000",
      bank: "HDFC Bank",
      offer: "No Cost EMI + Cashback",
      savings: "₹14,900",
      image: "📱",
      verified: true
    },
    {
      id: 2,
      product: "MacBook Air M2",
      originalPrice: "₹1,14,900",
      discountedPrice: "₹1,05,000",
      bank: "SBI Card",
      offer: "10% Instant Discount",
      savings: "₹9,900",
      image: "💻",
      verified: true
    },
    {
      id: 3,
      product: "Sony WH-1000XM5",
      originalPrice: "₹29,990",
      discountedPrice: "₹25,500",
      bank: "ICICI Bank",
      offer: "15% Cashback",
      savings: "₹4,490",
      image: "🎧",
      verified: true
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good morning! 👋</h1>
          <p className="text-gray-600">Ready to save money today?</p>
        </div>
        <Button 
          onClick={() => navigate("/wallet")}
          variant="outline" 
          className="bg-green-50 border-green-200 text-green-700"
        >
          <span className="mr-2">💰</span>
          ₹2,450
        </Button>
      </div>

      {/* Featured Deals Carousel */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Featured Deals</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {featuredDeals.map((deal) => (
            <Card key={deal.id} className="min-w-64 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">{deal.store}</p>
                    <h3 className="font-semibold">{deal.title}</h3>
                    <p className="text-xl font-bold">{deal.discount}</p>
                  </div>
                  <div className="text-3xl">{deal.image}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* WebView Style Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-600">💻 Shopping on Flipkart?</span>
            <Badge className="bg-blue-600">CardConnect Active</Badge>
          </div>
          <p className="text-sm text-gray-600">
            Use our browser extension to automatically find the best card offers while you shop!
          </p>
        </CardContent>
      </Card>

      {/* Available Offers */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Available Offers</h2>
        <div className="space-y-4">
          {offers.map((offer) => (
            <Card key={offer.id} className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{offer.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{offer.product}</h3>
                      {offer.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                      <span className="text-lg font-bold text-green-600">{offer.discountedPrice}</span>
                      <Badge className="bg-orange-100 text-orange-700">
                        Save {offer.savings}
                      </Badge>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-blue-600 font-medium">{offer.bank}</p>
                      <p className="text-sm text-gray-600">{offer.offer}</p>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Request Purchase
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
