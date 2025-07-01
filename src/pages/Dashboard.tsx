
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ShopPage from "@/components/dashboard/ShopPage";
import TransactionsPage from "@/components/dashboard/TransactionsPage";
import CardsPage from "@/components/dashboard/CardsPage";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'shop' | 'transactions' | 'cards'>('shop');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'shop':
        return <ShopPage />;
      case 'transactions':
        return <TransactionsPage />;
      case 'cards':
        return <CardsPage />;
      default:
        return <ShopPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20">
        {renderActiveTab()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button
            variant={activeTab === 'shop' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('shop')}
            className="flex flex-col items-center p-2 h-auto"
          >
            <span className="text-xl mb-1">🛒</span>
            <span className="text-xs">Shop</span>
          </Button>
          
          <Button
            variant={activeTab === 'transactions' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('transactions')}
            className="flex flex-col items-center p-2 h-auto"
          >
            <span className="text-xl mb-1">🔄</span>
            <span className="text-xs">Transactions</span>
          </Button>
          
          <Button
            variant={activeTab === 'cards' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('cards')}
            className="flex flex-col items-center p-2 h-auto"
          >
            <span className="text-xl mb-1">💳</span>
            <span className="text-xs">Cards</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
