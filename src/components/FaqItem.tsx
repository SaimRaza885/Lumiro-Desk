import { useState } from "react";
import { FaqProp } from "../types";

const FaqItem = ({ item, index }: FaqProp) => {
  const [activeId, setActiveId] = useState<number | null | string>(null);
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-1 md:px-7"
        onClick={() => setActiveId(active ? null : item.id)}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div className={`h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ${active && "max-lg:text-p1"}`}>
            {item.question}
          </div>
        </div>

        <div className={`faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4 ${active && "before:bg-p1 after:rotate-0 after:bg-p1"}`}>
          <div className="g4 size-11/12 rounded-full shadow-300 " />
          <span className={`absolute text-p3 ${active && "scale-150"}`}>
            {active ? "-" : ""}
          </span>
        </div>
      </div>

      {/* Slide Down Animation using scaleY & opacity */}
      <div
        className={`transition-transform duration-500 ease-in-out transform origin-top ${
          active ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0"
        }`}
      >
        <div className="body-3 px-7 py-3.5">{item.answer}</div>
      </div>

      <div className={`g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute ${active && "opacity-100"}`}>
        <div className="g4 absolute inset-0.5 rounded-3xl" />
        <div className="absolute left-8 top-0 h-1 max-md:h-0.5 rounded-full w-40 bg-p1" />
      </div>
    </div>
  );
};

export default FaqItem;
