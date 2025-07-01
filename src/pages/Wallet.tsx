
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Wallet = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const balance = {
    total: 2450,
    available: 2450,
    pending: 0
  };

  const transactions = [
    {
      id: 1,
      type: 'credit',
      description: 'Commission from iPhone purchase',
      amount: '+₹2,100',
      date: '15 Dec 2024',
      status: 'completed'
    },
    {
      id: 2,
      type: 'debit',
      description: 'Withdrawal to bank account',
      amount: '-₹5,000',
      date: '12 Dec 2024',
      status: 'completed'
    },
    {
      id: 3,
      type: 'credit',
      description: 'Referral bonus',
      amount: '+₹500',
      date: '10 Dec 2024',
      status: 'completed'
    }
  ];

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
          <h1 className="text-xl font-semibold">Wallet</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>💰</span>
              <span>Your Balance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold">₹{balance.total.toLocaleString()}</p>
              <p className="text-sm opacity-90">Available Balance</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm opacity-90">Available</p>
                <p className="text-lg font-semibold">₹{balance.available.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Pending</p>
                <p className="text-lg font-semibold">₹{balance.pending}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Tabs defaultValue="add" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="add">Add Funds</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          </TabsList>
          
          <TabsContent value="add" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add Money to Wallet</CardTitle>
                <CardDescription>Add funds to make purchases instantly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="add-amount">Enter Amount</Label>
                  <Input
                    id="add-amount"
                    type="number"
                    placeholder="₹ 0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {[500, 1000, 2000].map((preset) => (
                    <Button
                      key={preset}
                      variant="outline"
                      onClick={() => setAmount(preset.toString())}
                    >
                      ₹{preset}
                    </Button>
                  ))}
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Add ₹{amount || '0'} to Wallet
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="withdraw" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Withdraw to Bank</CardTitle>
                <CardDescription>Transfer money to your linked bank account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Bank Account:</strong> HDFC Bank ••••1234<br />
                    <strong>Processing Time:</strong> 1-2 business days
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="withdraw-amount">Enter Amount</Label>
                  <Input
                    id="withdraw-amount"
                    type="number"
                    placeholder="₹ 0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Withdraw ₹{amount || '0'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <span className="text-sm">
                        {transaction.type === 'credit' ? '↓' : '↑'}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount}
                    </p>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
