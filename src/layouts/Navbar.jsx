import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/APEX-DMIT-logo.png";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Link href="/">
          <Image src={logo} alt="logo" width={100} />
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
