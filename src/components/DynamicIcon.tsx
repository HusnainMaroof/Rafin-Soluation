// components/DynamicIcon.tsx
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

interface Props {
  name: string;
  className?: string;
}

export const DynamicIcon = ({ name, className = "w-6 h-6" }: Props) => {
  const Icon = Icons[name as IconName] as React.ElementType | undefined;
  if (!Icon) return null;
  return <Icon className={className} />;
};