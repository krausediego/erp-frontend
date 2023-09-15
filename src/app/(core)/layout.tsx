import { NavBar } from "@/components/nav-bar";

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="mx-auto">{children}</main>
    </div>
  );
}
