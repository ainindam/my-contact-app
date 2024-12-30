import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";

 export function CreateButtons() {
  return (
    <Link href={"/contacts/create"} className="inline-flex items-center space-x-1 text-whhite bg-blue-700 px-5 py-[9px} text-sm rounded-sm hover:bg-blue-800">
        <IoAddSharp size={20} />
    Create 
    </Link>
  )
}