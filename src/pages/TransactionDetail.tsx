
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const TransactionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock transaction data
  const transaction = {
    id: id,
    product: 'iPhone 15 Pro',
    status: 'completed',
    amount: '₹1,20,000',
    saved: '₹14,900',
    originalPrice: '₹1,34,900',
    bank: 'HDFC Bank',
    offer: 'No Cost EMI + Cashback',
    orderDate: '15 Dec 2024, 2:30 PM',
    deliveryDate: '18 Dec 2024',
    image: '📱',
    cardholder: {
      name: 'Rajesh Kumar',
      rating: 4.8,
      completedOrders: 156,
      joinedDate: 'March 2023',
      verified: true
    },
    timeline: [
      { status: 'Order Placed', time: '15 Dec, 2:30 PM', completed: true },
      { status: 'Payment Confirmed', time: '15 Dec, 2:35 PM', completed: true },
      { status: 'Processing', time: '15 Dec, 6:00 PM', completed: true },
      { status: 'Shipped', time: '16 Dec, 10:00 AM', completed: true },
      { status: 'Delivered', time: '18 Dec, 3:20 PM', completed: true }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'dispute':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold">Transaction Details</h1>
            <p className="text-sm text-gray-600">Order #{transaction.id}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Product Info */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{transaction.image}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">{transaction.product}</h2>
                  <Badge className={getStatusColor(transaction.status)}>
                    ✅ {transaction.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Original Price:</span>
                    <span className="line-through text-gray-500">{transaction.originalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">You Paid:</span>
                    <span className="text-xl font-semibold">{transaction.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600 font-medium">You Saved:</span>
                    <span className="text-green-600 font-semibold">{transaction.saved}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cardholder Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cardholder Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{transaction.cardholder.name}</h3>
                  {transaction.cardholder.verified && (
                    <Badge className="bg-green-100 text-green-700">✓ Verified</Badge>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>⭐ {transaction.cardholder.rating}</span>
                  <span>{transaction.cardholder.completedOrders} orders</span>
                  <span>Since {transaction.cardholder.joinedDate}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Bank Offer Used:</strong> {transaction.bank} - {transaction.offer}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Order Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Order Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transaction.timeline.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                    step.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${step.completed ? 'text-green-700' : 'text-gray-600'}`}>
                      {step.status}
                    </p>
                    <p className="text-sm text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            💬 Chat with Cardholder
          </Button>
          <Button variant="outline" className="w-full">
            📱 Contact Support
          </Button>
          <Button variant="outline" className="w-full text-orange-600 border-orange-200">
            ⚠️ Report Issue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
