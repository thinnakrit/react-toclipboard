import { useState } from 'react';

interface UseClipboardResult {
  copy: () => void;
  copied: boolean;
}

const useClipboard = (text: string): UseClipboardResult => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return { copy, copied };
};

export default useClipboard;
