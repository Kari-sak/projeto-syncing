import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export function Footer() {
  return(
    <footer className="px-6 py-16 w-full font-body text-gray-300 bg-purple-300">
      <div className="flex flex-col gap-8 justify-between mx-auto max-w-6xl sm:flex-row sm:items-center">
        <Fade direction="left" cascade triggerOnce>
          <div>
            <h2 className="mb-6 text-4xl font-title text-purple-700 font-bold">
                <Link to={'/'}>
                Soul
                <span className="text-gray-300">Coderz</span>
                .
              </Link>
            </h2>
            <p className="mb-3">
              &copy;2022 SoulCoderz.
            </p>
            <p>Todos os direitos reservados</p>
          </div>
        </Fade>
        <Fade direction="right" cascade duration={300} triggerOnce>
          <ul className="flex gap-8">
            <li>
              <a href="https://www.instagram.com/">
                <RiInstagramFill size={24} className="hover:-translate-y-1 transition-transform"/>
              </a>
            </li>
            <li>
              <a href="https://pt-br.facebook.com/">
                <FaFacebookF size={24} className="hover:-translate-y-1 transition-transform"/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutube size={24} className="hover:-translate-y-1 transition-transform"/>
              </a>
            </li>
          </ul>
        </Fade>
      </div>
    </footer>
  )
}