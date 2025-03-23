"use client";
import TypewriterComponent from "typewriter-effect";

interface TypingEffectProps {
  labels: string[];
}

const TypingEffect = ({ labels }: TypingEffectProps) => {
  return (
    <div className="text-gray-300 text-xl tracking-wide mb-5 lg:text-2xl">
      <TypewriterComponent
        options={{
          loop: true,
          strings: labels, // <-- Now using the labels parameter dynamically!
          autoStart: true,
        }}
      />
    </div>
  );
};

export default TypingEffect;
