import React from 'react'
import MyAccountPage from './pages/MyAccountPage';
import MySettingsPage from './pages/MyNotificationsPage';
import UpgradePage from './pages/UpgradePage';
import MyNotificationsPage from './pages/MySettingsPage';
import AccountSettings from './pages/AccountSettings';

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
        return <MyNotificationsPage />;
      case 3:
        return <MySettingsPage/>;
      case 4:
        return <AccountSettings/>
        case 5:
          return <UpgradePage/>;
          // Add more cases as needed
      default:
        return <MyAccountPage />;
    }
  };

export default SettingsTabContent