import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { useMemo } from "react";

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

function Icon({ name, ...props }: IconProps) {
  const LucideIcon = useMemo(() => {
    return dynamic(dynamicIconImports[name]);
  }, [name]);

  return <LucideIcon {...props} />;
}

export { Icon };
