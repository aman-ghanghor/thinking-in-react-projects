import React, { useState, useContext } from "react";

import sublinks from "./data";

// creating context
const AppContext = React.createContext();
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState( {page: "", links: []} )
,yyyhj
  // sidebar opening && closing
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // modal opening && closing
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find( (link)=> link.page.toLowerCase()===text.toLowerCase() ) ;
    setPage(page) ;
    setIsSubmenuOpen(true);
    setLocation(coordinates) ;
    
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
