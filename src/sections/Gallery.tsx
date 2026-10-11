import { Element } from "react-scroll";
import { screenshots } from "../constants";

const Gallery = () => {
  return (
    <section>
      <Element name="gallery">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16"></div>
          <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-7 max-w-lg text-center text-p4 max-sm:max-w-sm">
            A calm, focused home for your day
          </h3>
          <p className="body-1 relative z-3 mx-auto mb-16 max-w-640 text-center max-md:mb-11">
            No mockups — here is what Lumiro Desk actually looks like inside.
          </p>

          <div className="relative z-2 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {screenshots.map(({ id, image, tag, title, text }, i) => {
              const middle = i === 1;
              return (
                <div
                  key={id}
                  className={`rounded-3xl border-2 border-s4/60 p-6 transition-colors duration-500 hover:border-s4 sm:last:col-span-2 xl:last:col-span-1 ${
                    middle ? "g7 border-s4" : "border-s3 bg-s1"
                  }`}
                >
                  <div className="mb-6 overflow-hidden rounded-2xl border-2 border-s2">
                    <img src={image} alt={title} className="w-full" />
                  </div>
                  <p className="small-2 mb-3 uppercase text-p3">{tag}</p>
                  <h4 className="h6 mb-3 text-p4">{title}</h4>
                  <p className="body-3">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Gallery;
