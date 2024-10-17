import { Button } from "@nextui-org/button";
import {
  EmailIcon,
  CreateNewIcon,
  DeleteIcon,
  ExcIcon,
  FilterIcon,
} from "@/app/(dashboard)/account/_components/Icon";
import { Input } from "@nextui-org/input";

export default function ActionBar() {
  return (
    <div className="flex items-center gap-2 p-4">
      <Input
        type="name"
        placeholder="Search by name, group, technology,..."
        className="h-10 w-[45%]"
      />
      <Button color="success" size="sm" className="text-white">
        <ExcIcon /> Export to Excel
      </Button>

      <Button color="secondary" size="sm">
        <EmailIcon /> Send email
      </Button>
      <Button color="danger" size="sm">
        <DeleteIcon />
        Delete
      </Button>
      <Button color="primary" size="sm">
        <CreateNewIcon />
        New intern
      </Button>
      <Button color="primary" size="sm">
        <FilterIcon />
        Filter
      </Button>
    </div>
  );
}
