import { FooterWrapper, Heart, NameLink } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      Developed with <Heart>&hearts;</Heart> by{" "}
      <NameLink
        href="https://www.linkedin.com/in/diana-manarim-dias/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Diana Manarim Dias
      </NameLink>
    </FooterWrapper>
  );
};

export default Footer;
