import { Bell, Menu, X } from "lucide-react";

const MobileHeader = ({ 
  onMenuClick,
  showSidebar,
  showNotifications,
  onNotificationClick
}) => {
  return (
    <div className="md:hidden flex justify-between items-center p-3 border-b shadow-sm bg-white sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="p-1">
          {showSidebar ? (
            <X className="text-black w-6 h-6" />
          ) : (
            <Menu className="text-black w-6 h-6" />
          )}
        </button>
        <div className="text-xl font-normal whitespace-nowrap">Hi Wajahat!</div>
      </div>
      
      <button 
        onClick={onNotificationClick} 
        className="p-1 relative"
      >
        <Bell className="text-black w-6 h-6" />
      </button>
    </div>
  );
};

export default MobileHeader;