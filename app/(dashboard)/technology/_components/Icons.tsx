import EditIcon2 from "@/public/icons/technology/edit-2.svg";
import Image from "next/image";

type TechIconsProps = {
  size?: number;
  className?: string;
};

export const EditIcon = ({ size = 24, className }: TechIconsProps) => (
  <Image
    alt="Edit icon"
    src={EditIcon2}
    width={size}
    height={size}
    className={className}
  />
);
