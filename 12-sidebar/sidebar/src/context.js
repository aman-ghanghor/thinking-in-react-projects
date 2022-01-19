import React, { useState, useContext } from "react";

const AppGlobalContext = React.createContext("hello");

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    }
  };
  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };
  
  const openModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };
  const closeModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  return (
    <AppGlobalContext.Provider
      value={
        {openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        isModalOpen,
        isSidebarOpen}
      }
    >
      {children}
    </AppGlobalContext.Provider>
  );
};

// custome hook [useCustomHook()]
const useAppContext = () => {
   return useContext(AppGlobalContext) ;
}

export { AppProvider, useAppContext };
