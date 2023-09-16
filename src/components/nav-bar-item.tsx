import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Icon } from "./ui/icon";
import { useRouter } from "next/navigation";

interface NavBarItemProps {
  icon: keyof typeof dynamicIconImports;
  name: string;
  path: string;
  active?: boolean;
}

export function NavBarItem({ icon, name, path, active }: NavBarItemProps) {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center">
      <div
        onClick={() => router.push(path)}
        data-active={active}
        className="w-5/6 flex px-4 transition-all duration-500 py-3 data-[active=true]:bg-primary cursor-pointer data-[active=true]:text-white rounded-xl gap-3 items-center text-muted-foreground text-lg"
      >
        <Icon name={icon} strokeWidth="1.5px" size={30} />
        <p className="font-normal">{name}</p>
      </div>
    </div>
  );
}
