import { NavBar } from "@/components/nav-bar";

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <NavBar />
      <main className="mx-auto w-full min-h-screen p-4">{children}</main>
    </div>
  );
}
