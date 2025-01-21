import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#078080] px-14 py-20 text-[#FDF8FF]">
      <section>
        <li>
          <a href="">Preguntas frecuentes</a>
        </li>
        <li>
          <a href="">Términos y condiciones</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </section>
      <section>
        
      </section>
      <section>
        <ul className="flex">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <RiTwitterXFill />
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;