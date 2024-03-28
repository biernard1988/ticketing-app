"use client";
import { useRouter } from "next/navigation";
import { FaX } from "react-icons/fa6";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FaX
      className="text-gray-400 hover:cursor-pointer hover:text-red-600"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
