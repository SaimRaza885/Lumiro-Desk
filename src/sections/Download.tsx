import { Element } from "react-scroll";
import { links, logos } from "../constants";
import { Marker } from "../components/Marker";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative  mr-6 flex-540 max-xl:flex-280 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>
              <p className="body-1 mb-10 md:max-w-md w-full">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => {
                  return (
                    <li
                      key={id}>
                      <a
                        href={url}
                        className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                      >
                        <span className="absolute -top-2 rotate-90">
                          <Marker />
                        </span>
                        <img
                          src={"/images/lines.svg"}
                          alt="lines"
                          className="absolute size-13/20 object-contain"
                        />
                        <span className="download_tech-icon">{icon}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/*  image sectoin */}

            <div className="mb-10 max-md:hidden">
              <div className="rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 shadow-300 px-6 pb-6 pt-14">
                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl "
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>

        </div>
      </Element>
    </section>
  );
};

export default Download;
