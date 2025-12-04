import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#f08c45] max-h-max px-14 py-20 text-black">
      <section>
        <ul className="list-none">
          <li>
            <a href="">Preguntas frecuentes</a>
          </li>
          <li>
            <a href="">Términos y condiciones</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </section>
      <section>
        
      </section>
      <section>
        <ul className="flex items-center gap-4 py-2">
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <RiTwitterXFill />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;