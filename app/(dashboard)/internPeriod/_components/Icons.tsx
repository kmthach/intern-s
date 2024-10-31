import EmailIconSVG from "@/public/icons/actionbar/mail-icon.svg";
import CreateIconSVG from "@/public/icons/actionbar/add-icon.svg";
import DeleteIconSVG from "@/public/icons/actionbar/delete-icon.svg";
import ExcelIconSVG from "@/public/icons/actionbar/excel-icon.svg";
import FilterIconSVG from "@/public/icons/actionbar/filter-icon.svg";
import EditIconSVG from "@/public/icons/others/edit-icon.svg";
import Image from "next/image";

type ActionBarIconsProps = {
  size?: number;
  className?: string;
};

export const EmailIcon = ({ size = 20, className }: ActionBarIconsProps) => (
  <Image
    alt="Email Icon"
    width={size}
    height={size}
    src={EmailIconSVG}
    className={className}
  />
);

export const CreateIcon = ({ size = 20, className }: ActionBarIconsProps) => (
  <Image
    alt="Email Icon"
    width={size}
    height={size}
    src={CreateIconSVG}
    className={className}
  />
);

export const DeleteIcon = ({ size = 20, className }: ActionBarIconsProps) => (
  <Image
    alt="Delete Icon"
    width={size}
    height={size}
    src={DeleteIconSVG}
    className={className}
  />
);

export const ExcelIcon = ({ size = 20, className }: ActionBarIconsProps) => (
  <Image
    alt="Excel Icon"
    width={size}
    height={size}
    src={ExcelIconSVG}
    className={className}
  />
);

export const FilterIcon = ({ size = 20, className }: ActionBarIconsProps) => (
  <Image
    alt="Filter Icon"
    width={size}
    height={size}
    src={FilterIconSVG}
    className={className}
  />
);

export const EditIcon = ({ size = 20, className }: ActionBarIconsProps) => (
  <Image
    alt="Filter Icon"
    width={size}
    height={size}
    src={EditIconSVG}
    className={className}
  />
);