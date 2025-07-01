
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CardsPage = () => {
  const earnings = {
    totalEarned: "₹15,840",
    availableBalance: "₹8,920",
    thisMonth: "₹3,240"
  };

  const cards = [
    {
      id: 1,
      bank: "HDFC Bank",
      type: "Credit Card",
      lastFour: "4567",
      benefits: ["No Cost EMI", "Cashback", "Fuel Surcharge Waiver"],
      active: true
    },
    {
      id: 2,
      bank: "SBI Card",
      type: "Credit Card",
      lastFour: "8901",
      benefits: ["Airport Lounge", "Reward Points", "Insurance"],
      active: true
    },
    {
      id: 3,
      bank: "ICICI Bank",
      type: "Debit Card",
      lastFour: "2345",
      benefits: ["UPI Cashback", "Online Discount", "ATM Free"],
      active: false
    }
  ];

  const commissionRequests = [
    {
      id: 1,
      product: "Samsung Galaxy S24",
      originalPrice: "₹79,999",
      discount: "12%",
      commission: "₹1,920",
      buyer: "Rohit M.",
      rating: 4.7,
      timeLeft: "2 hours",
      image: "📱"
    },
    {
      id: 2,
      product: "iPad Pro 11\"",
      originalPrice: "₹89,900",
      discount: "8%",
      commission: "₹1,440",
      buyer: "Sneha R.",
      rating: 4.9,
      timeLeft: "6 hours",
      image: "📱"
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Cards & Earnings</h1>
        <p className="text-gray-600">Manage your cards and track commissions</p>
      </div>

      {/* Earnings Dashboard */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>💰</span>
            <span>Earnings Dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm opacity-90">Total Earned</p>
              <p className="text-xl font-bold">{earnings.totalEarned}</p>
            </div>
            <div className="text-center">
              <p className="text-sm opacity-90">Available</p>
              <p className="text-xl font-bold">{earnings.availableBalance}</p>
            </div>
            <div className="text-center">
              <p className="text-sm opacity-90">This Month</p>
              <p className="text-xl font-bold">{earnings.thisMonth}</p>
            </div>
          </div>
          <Button className="w-full mt-4 bg-white text-green-600 hover:bg-gray-100">
            Withdraw Earnings
          </Button>
        </CardContent>
      </Card>

      {/* Stored Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your Cards</h2>
          <Button variant="outline" size="sm">
            + Add Card
          </Button>
        </div>
        
        <div className="space-y-3">
          {cards.map((card) => (
            <Card key={card.id} className={`${card.active ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{card.bank}</h3>
                    <p className="text-sm text-gray-600">{card.type} •••• {card.lastFour}</p>
                  </div>
                  <Badge className={card.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}>
                    {card.active ? '✓ Active' : 'Inactive'}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {card.benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* High Commission Requests */}
      <div>
        <h2 className="text-lg font-semibold mb-4">High Commission Requests</h2>
        <div className="space-y-4">
          {commissionRequests.map((request) => (
            <Card key={request.id} className="border-l-4 border-l-orange-500">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{request.image}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{request.product}</h3>
                      <Badge className="bg-orange-100 text-orange-700">
                        🕒 {request.timeLeft} left
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600">Price: {request.originalPrice}</p>
                        <p className="text-sm text-gray-600">Discount: {request.discount}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-600">
                          Your Commission: {request.commission}
                        </p>
                        <p className="text-sm text-gray-600">
                          Buyer: {request.buyer} ⭐ {request.rating}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        Accept Request
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
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

export default CardsPage;
