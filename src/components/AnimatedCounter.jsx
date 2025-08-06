import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from '../constants';
gsap.registerPlugin(ScrollTrigger);



const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      if (!numberElement) return;
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: counter, // Use the actual block
          start: "top 80%", // More flexible
          once: true,
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);
  

  return (
    <div
  id="counter"
  ref={counterRef}
  className="px-6 py-5 mt-5 mb-5 xl:mt-0 xl:mx-auto"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {counterItems.map((item, index) => (
      <div
        key={index}
        ref={(el) => el && (countersRef.current[index] = el)}
        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center text-center"
      >
        <div className="counter-number text-white-50 text-5xl font-bold mb-2">
          0 {item.suffix}
        </div>
        <div className="text-white-50 text-lg">{item.label}</div>
      </div>
    ))}
  </div>
</div>

  );
};

export default AnimatedCounter;
