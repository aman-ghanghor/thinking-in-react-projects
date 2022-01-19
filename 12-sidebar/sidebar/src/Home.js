import React  from "react";
import {useAppContext} from "./context" ;
import {AiOutlineMenu} from "react-icons/ai" ;

function Home() {
   const {openModal, openSidebar} = useAppContext() ;
   return (
      <div className="home">
         <button type="button" className="open-sidebar" onClick={openSidebar}>
           <AiOutlineMenu />
         </button>
         <button type="button" className="open-modal" onClick={openModal}>
            Modal
         </button>
      </div>
   )  
}

export default Home;
