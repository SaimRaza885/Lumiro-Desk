
import { socials } from '../constants'

const Footer = () => {
    let year = new Date().getFullYear();
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full items-center max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">&copy; {year} Lumiro Desk · Made by Saim Raza</p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-8 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={title}>
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/2 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
