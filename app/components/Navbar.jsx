import Link from "next/link";
import { FaHouse, FaTicket } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-nav p-4 drop-shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHouse className="icon hover:text-black" />
        </Link>
        <Link href="/TicketPage/new">
          <FaTicket className="icon hover:text-black" />
        </Link>
      </div>
      <div>
        <p className="text-slate-500">biernard@gmail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
