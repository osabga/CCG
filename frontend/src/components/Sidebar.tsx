import React from 'react';

interface SidebarProps {
  onNewChat: () => void;
  history: Array<{ _id: string, question: string, answer?: string, userId: string }>;
}

const Sidebar: React.FC<SidebarProps> = ({ onNewChat, history }) => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-[#E9EFFA0F] rounded h-screen flex flex-col justify-between">
        <div>
          <ul className="space-y-2">
            <li>
              <button 
                className="flex items-center p-2 text-xl font-normal text-white hover:bg-purple-800 rounded-lg"
                onClick={onNewChat}
              >
                <span className="flex-1 ml-3 whitespace-nowrap">+ New chat</span>
              </button>
            </li>
          </ul>
          <div className="border-t border-white my-4"></div> {/* White border */}
          <ul className="space-y-2 overflow-y-auto max-h-80"> {/* Set max height and overflow */}
            {history.map((item) => (
              <li key={item._id}>
                <div className="flex items-center p-2 text-base font-normal text-white bg-gray-800 rounded-lg">
                  <span className="flex-1 ml-3 whitespace-nowrap">{item.question}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <ul className="space-y-2">
            <li>
              <button className="flex items-center p-2 text-xl font-normal text-white hover:bg-purple-800 rounded-lg">
                <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-xl font-normal text-white hover:bg-purple-800 rounded-lg">
                <span className="flex-1 ml-3 whitespace-nowrap">FAQs</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
