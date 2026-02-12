import { MoveDown } from "lucide-react";
import TextPressure from "@/components//ui/text-pressure";
import Silk from "@/components/backgrounds/silk";

export function Hero() {
  return (
    <div className="relative -mt-16 h-screen select-none overflow-hidden">
      <div className="absolute bottom-0 left-0 z-1 h-56 w-full bg-linear-0 from-background" />
      <Silk
        color="#c71919"
        noiseIntensity={1}
        rotation={0}
        scale={1}
        speed={2.5}
      />
      <div className="absolute top-1/2 left-0 h-fit w-full -translate-y-1/2 p-24">
        <TextPressure
          alpha={false}
          flex
          italic
          minFontSize={36}
          stroke={false}
          strokeColor="#00000000"
          text="Welcome!"
          textColor="#ffffff"
          weight
          width
        />
      </div>
      <div className="absolute bottom-12 left-1/2 z-10 flex w-fit -translate-x-1/2 flex-col align-center text-foreground text-sm">
        <span>scroll down</span>
        <div className="animation-duration-1500 mx-auto mt-4 animate-bounce rounded-full border border-foreground py-2">
          <MoveDown />
        </div>
      </div>
    </div>
  );
}
