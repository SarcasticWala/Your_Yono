
import { ChevronDown } from 'lucide-react';

const ScrollDown = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-white cursor-pointer">
      <span>Scroll down</span>
      <ChevronDown className="animate-bounce" />
    </div>
  );
};

export default ScrollDown;