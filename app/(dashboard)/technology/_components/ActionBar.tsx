import { Button } from "@nextui-org/button";
import {
  CreateNewIcon,
  DeleteIcon,
  ExcIcon,
} from "@/app/(dashboard)/account/_components/Icon";
import { Input } from "@nextui-org/input";

export default function ActionBar() {
  return (
    <div className="flex items-center gap-2 p-4">
      <Input
        type="name"
        placeholder="Search by name, group, technology,..."
        className="h-10 w-[60%]"
      />
      <Button color="success" size="sm" className="text-white">
        <ExcIcon /> Export to Excel
      </Button>

      <Button color="danger" size="sm">
        <DeleteIcon />
        Delete
      </Button>
      <Button color="primary" size="sm">
        <CreateNewIcon />
        New technology
      </Button>
    </div>
  );
}
