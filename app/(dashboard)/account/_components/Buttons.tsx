import { Button } from "@nextui-org/button";
import ViewIcon from "@/app/(dashboard)/account/_components/Icon";

export default function ActionBar() {
  return (
    <div>
      <Button className="bg-green-600" variant="shadow">
        <ViewIcon /> Export to Excel
      </Button>

      <Button className="bg-pink-600" variant="shadow">
        Send email
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
    </div>
  );
}
