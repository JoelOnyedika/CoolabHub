import React from 'react'
import GettingStartedPage from './page/GettingStartedPage';

interface ITabs {
    tab: string;
    isActive: boolean
    onClick: any
}

const TabContent: React.FC<{ activeTab: number | null }> = ({ activeTab }) => {
    // Customize the content for each tab based on the activeTab
    switch (activeTab) {
      case 1:
        return <GettingStartedPage />;
      case 2:
        return <div>Content for Tab 2</div>;
      case 3:
        return <div>Content for Tab 3</div>;
      case 4:
        return <div>Content for Tab 4</div>;
      case 5:
        return <div>Content for Tab 5</div>;
      // Add more cases as needed
      default:
        return <GettingStartedPage />;
    }
  };

export default TabContent