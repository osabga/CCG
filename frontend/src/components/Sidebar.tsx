const Sidebar = () => {
    return (
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-[#E9EFFA0F] rounded h-screen">
          <ul className="space-y-2">
            <li>
              <button className="flex items-center p-2 text-base font-normal text-white hover:bg-blue-700 rounded-lg">
                <span className="flex-1 ml-3 whitespace-nowrap">+ New chat</span>
              </button>
            </li>
            {/* Agrega más elementos de navegación si es necesario */}
          </ul>
          <div className="absolute bottom-0 my-4">
            <ul className="space-y-2">
              <li>
                <button className="flex items-center p-2 text-base font-normal text-white hover:bg-blue-700 rounded-lg">
                  <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
                </button>
              </li>
              <li>
                <button className="flex items-center p-2 text-base font-normal text-white hover:bg-blue-700 rounded-lg">
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