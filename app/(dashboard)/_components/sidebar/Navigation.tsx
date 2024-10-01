"use client";
import {
  DashboardIcon,
  AccountManagementIcon,
  PositionManagementIcon,
  InternManagementIcon,
  ProjectManagementIcon,
  TechnologyManagementIcon,
} from "./Icons";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { cn } from "@nextui-org/theme";
import { usePathname } from "next/navigation";

type NavigationProps = {
  className?: string;
};

export const NavigationItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: DashboardIcon,
  },
  {
    label: "Project Management",
    href: "/project",
    icon: ProjectManagementIcon,
  },
  {
    label: "Intern Management",
    href: "/intern",
    icon: InternManagementIcon,
  },
  {
    label: "Position Management",
    href: "/position",
    icon: PositionManagementIcon,
  },
  {
    label: "Technology Management",
    href: "/technology",
    icon: TechnologyManagementIcon,
  },
  {
    label: "Account Management",
    href: "/account",
    icon: AccountManagementIcon,
  },
];

export default function Navigation(props: NavigationProps) {
  const currentPath = usePathname();

  return (
    <div className={cn("flex flex-col gap-6", props.className)}>
      {NavigationItems.map((item) => {
        const isActive = currentPath === item.href;
        return (
          <Button
            color="primary"
            variant={isActive ? "shadow" : "light"}
            as={Link}
            startContent={<item.icon size={24} active={isActive} />}
            className={cn(
              "text-grey justify-start text-base font-medium",
              isActive && "font-semibold text-white",
            )}
            href={item.href}
            size="lg"
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
