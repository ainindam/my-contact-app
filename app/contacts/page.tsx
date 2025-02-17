import ContactTable from "@/components/ContactTable";
import Search from "@/components/Search";


export default function Contacts() {
  return (
    <div className="max-w-screen-md mx-auto-mt-5">
        <div className="flex items-center justift-between gap-1 mb-5">
        <Search />
        </div>
        <ContactTable  />
    </div>
  )
}
