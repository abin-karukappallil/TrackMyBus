"use client";
 
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
 
const GridPatternDashed = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};
 
export default GridPatternDashed;