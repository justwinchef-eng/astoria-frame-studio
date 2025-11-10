import { useState, useEffect } from "react";
import { Minus, Plus, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TextSizeControl = () => {
  const [textSize, setTextSize] = useState(100);

  useEffect(() => {
    // Load saved text size from localStorage
    const savedSize = localStorage.getItem("textSize");
    if (savedSize) {
      const size = parseInt(savedSize);
      setTextSize(size);
      document.documentElement.style.fontSize = `${size}%`;
    }
  }, []);

  const updateTextSize = (newSize: number) => {
    // Clamp between 80% and 150%
    const clampedSize = Math.max(80, Math.min(150, newSize));
    setTextSize(clampedSize);
    document.documentElement.style.fontSize = `${clampedSize}%`;
    localStorage.setItem("textSize", clampedSize.toString());
  };

  const increaseSize = () => updateTextSize(textSize + 10);
  const decreaseSize = () => updateTextSize(textSize - 10);
  const resetSize = () => updateTextSize(100);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          aria-label="Text size control"
        >
          <Type className="w-4 h-4" />
          <span className="hidden sm:inline">{textSize}%</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="space-y-4">
          <div className="text-sm font-medium">Text Size</div>
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={decreaseSize}
              disabled={textSize <= 80}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <div className="text-2xl font-bold">{textSize}%</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetSize}
                className="text-xs"
              >
                Reset
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={increaseSize}
              disabled={textSize >= 150}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Range: 80% - 150%
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TextSizeControl;
