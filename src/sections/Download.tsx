import { Element } from "react-scroll";
import { downloadUrl } from "../constants";
import Button from "../components/Button";
import Logo from "../components/Logo";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="absolute inset-0 -z-10 pointer-events-none bg-p4/5 blur-3xl rounded-40" />
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-md:flex-100">
              <div className="mb-10">
                <Logo />
              </div>
              <p className="body-1 mb-10 md:max-w-md w-full">
                Free for Windows 10 and 11. Download, install, and keep your
                whole day in one calm place — no account, no cloud, no cost.
              </p>

              <div className="mb-7 flex flex-wrap items-center">
                <Button icon="/images/download.svg" href={downloadUrl}>
                  Download for Windows
                </Button>
              </div>
              <p className="small-compact uppercase text-p5 opacity-80">
                Free · ~4 MB · No account needed
              </p>
            </div>

            {/*  image section */}

            <div className="mb-10 max-md:hidden">
              <div className="rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 shadow-300 px-6 pb-6 pt-14">
                  <img
                    src="/images/shots/today-wide.png"
                    width={855}
                    height={534}
                    alt="Lumiro Desk"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex flex-wrap justify-center gap-5 max-lg:mt-16">
            {["100% Offline", "No Account", "Free Forever", "Data Stays On Your PC"].map(
              (badge) => (
                <li
                  key={badge}
                  className="small-2 rounded-20 border-2 border-s3 bg-s1 px-8 py-3.5 uppercase text-p4 shadow-lg shadow-p4/10"
                >
                  {badge}
                </li>
              )
            )}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
