import { twMerge } from "tailwind-merge";

export function Content({ children, className }: React.ComponentProps<"div">) {
  return (
    <div className={twMerge(className, "bg-card rounded-xl")}>{children}</div>
  );
}
