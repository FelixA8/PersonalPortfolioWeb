"use client";

import { useState } from "react";

function CertificateModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="dialog-message">
          <p>HI</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </>
  );
}

export default CertificateModal;
