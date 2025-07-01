
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const TransactionsPage = () => {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      type: 'buyer',
      product: 'iPhone 15 Pro',
      status: 'completed',
      time: '2 hours ago',
      amount: '₹1,20,000',
      saved: '₹14,900',
      cardholder: 'Rajesh K.',
      rating: 4.8,
      image: '📱'
    },
    {
      id: 2,
      type: 'cardholder',
      product: 'MacBook Air M2',
      status: 'pending',
      time: '1 day ago',
      amount: '₹1,05,000',
      commission: '₹2,100',
      buyer: 'Priya S.',
      rating: 4.9,
      image: '💻'
    },
    {
      id: 3,
      type: 'buyer',
      product: 'Sony Headphones',
      status: 'dispute',
      time: '3 days ago',
      amount: '₹25,500',
      saved: '₹4,490',
      cardholder: 'Amit P.',
      rating: 4.5,
      image: '🎧'
    }
  ];

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'pending':
        return '⏳';
      case 'dispute':
        return '⚠️';
      default:
        return '📋';
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Transactions</h1>
        <p className="text-gray-600">Track your purchase and earning history</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="buyer">Buyer</TabsTrigger>
          <TabsTrigger value="cardholder">Cardholder</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent 
                className="p-4"
                onClick={() => navigate(`/transaction/${transaction.id}`)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{transaction.image}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{transaction.product}</h3>
                      <Badge className={getStatusColor(transaction.status)}>
                        {getStatusIcon(transaction.status)} {transaction.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-sm text-gray-500">{transaction.time}</span>
                      <span className="text-lg font-bold">{transaction.amount}</span>
                      {transaction.type === 'buyer' && transaction.saved && (
                        <Badge className="bg-green-100 text-green-700">
                          Saved {transaction.saved}
                        </Badge>
                      )}
                      {transaction.type === 'cardholder' && transaction.commission && (
                        <Badge className="bg-blue-100 text-blue-700">
                          Earned {transaction.commission}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">
                          {transaction.type === 'buyer' ? 'Cardholder:' : 'Buyer:'}
                        </span>
                        <span className="text-sm font-medium">
                          {transaction.type === 'buyer' ? transaction.cardholder : transaction.buyer}
                        </span>
                        <span className="text-sm text-yellow-600">
                          ⭐ {transaction.rating}
                        </span>
                      </div>
                      
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="buyer" className="mt-4 space-y-4">
          {transactions.filter(t => t.type === 'buyer').map((transaction) => (
            <Card key={transaction.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent 
                className="p-4"
                onClick={() => navigate(`/transaction/${transaction.id}`)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{transaction.image}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{transaction.product}</h3>
                      <Badge className={getStatusColor(transaction.status)}>
                        {getStatusIcon(transaction.status)} {transaction.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-sm text-gray-500">{transaction.time}</span>
                      <span className="text-lg font-bold">{transaction.amount}</span>
                      {transaction.saved && (
                        <Badge className="bg-green-100 text-green-700">
                          Saved {transaction.saved}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="cardholder" className="mt-4 space-y-4">
          {transactions.filter(t => t.type === 'cardholder').map((transaction) => (
            <Card key={transaction.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent 
                className="p-4"
                onClick={() => navigate(`/transaction/${transaction.id}`)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{transaction.image}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{transaction.product}</h3>
                      <Badge className={getStatusColor(transaction.status)}>
                        {getStatusIcon(transaction.status)} {transaction.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-sm text-gray-500">{transaction.time}</span>
                      <span className="text-lg font-bold">{transaction.amount}</span>
                      {transaction.commission && (
                        <Badge className="bg-blue-100 text-blue-700">
                          Earned {transaction.commission}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransactionsPage;
