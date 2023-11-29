import React from 'react'
import MyAccountPage from './pages/MyAccountPage';
import MySettingsPage from './pages/MySettingsPage';
import UpgradePage from './pages/UpgradePage';
import MyNotificationsPage from './pages/MyNotificationsPage';

interface ITabs {
    tab: string;
    isActive: boolean
    onClick: any
}

const SettingsTabContent: React.FC<{ activeTab: number | null }> = ({ activeTab }) => {
    // Customize the content for each tab based on the activeTab
    switch (activeTab) {
      case 1:
        return <MyAccountPage />;
      case 2:
        return <MySettingsPage/>;
      case 3:
        return <MyNotificationsPage />;
      case 4:
        return <UpgradePage/>;
      case 5:
        return <div>Content for Tab 5</div>;
      // Add more cases as needed
      default:
        return <MyAccountPage />;
    }
  };

export default SettingsTabContent