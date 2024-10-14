import { Button } from "@nextui-org/button";
import { EmailIcon,CreateNewIcon, DeleteIcon, ExcIcon, FilterIcon } from "@/app/(dashboard)/account/_components/Icon";
import {Input} from "@nextui-org/input";

export default function ActionBar() {
  return (
    <div className="p-4 flex items-center gap-2">
      <Input type="name" label="Search by name, group, technology,..." className="w-[45%]"/>
      <Button color="success" className="text-white" variant="shadow">
        <ExcIcon /> Export to Excel
      </Button>

      <Button color="secondary"  variant="shadow">
        <EmailIcon/> Send email
      </Button>
      <Button color="danger" variant="shadow"> 
        <DeleteIcon/>
        Delete
      </Button>
      <Button color="primary" variant="shadow">
        <CreateNewIcon/>
        New intern
      </Button>
      <Button color ="primary" variant="shadow">
        <FilterIcon/>
        Filter
      </Button>
    </div>
  );
}
