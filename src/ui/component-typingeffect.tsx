"use client";
import TypewriterComponent from "typewriter-effect";

const TypingEffect = () => {
  return (
    <div className="text-gray-300 text-xl tracking-wide mb-5 lg:text-2xl">
      <TypewriterComponent
        options={{
          loop: true,
          strings: ["I'm a Student", "I'm a Learner", "I'm a Developer"],
          autoStart: true,
        }}
      />
    </div>
  );
};

export default TypingEffect;
