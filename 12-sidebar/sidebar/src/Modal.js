import React from "react" ;

import {GrClose} from "react-icons/gr" ;

import {useAppContext} from "./context" ;


function Modal() {
   const {isModalOpen, closeModal} = useAppContext() ;

   return (
     <div className={isModalOpen ? "modal-container show-modal": "modal-container"} >
       <div className="modal">
         <div className="modal-header">
            <h3>Modal Name</h3>
            <button type="button" className="close-btn" onClick={closeModal}> <GrClose /> </button>
         </div>
         <div className="modal-body">
            <p>This is modal body</p>
         </div>
       </div>
     </div>
   )  
}

export default Modal;
