import Link from "next/link";
import { FaHouse, FaTicket } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <FaHouse className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FaTicket className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">biernard@gmail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
