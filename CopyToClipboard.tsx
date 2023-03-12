import React, { useRef } from 'react';

interface CopyToClipboardProps {
  children: React.ReactNode;
  className?: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ children, className }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (elementRef.current) {
      navigator.clipboard.writeText(elementRef.current.innerText);
    }
  };

  return (
    <div className={className} onClick={handleCopy}>
      {children}
      <div style={{ display: 'none' }} ref={elementRef}>
        {children}
      </div>
    </div>
  );
};

export default CopyToClipboard;
