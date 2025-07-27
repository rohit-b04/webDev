import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "", onClose }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current; // It is recommended to store the dialog.current in a constant var. Because, this method makes sure that the cleanup being made is same as the dialog current 
    if (open) {
      modal.showModal();
    }

    return () => modal.close(); // Cleanup function
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
