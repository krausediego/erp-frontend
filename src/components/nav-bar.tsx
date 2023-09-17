"use client";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Icon } from "./ui/icon";
import { NavBarItem } from "./nav-bar-item";
import { usePathname } from "next/navigation";
import { SwitchTheme } from "./switch-theme";

interface MenuItemsProps {
  route?: {
    name: string;
    path: string;
    icon: keyof typeof dynamicIconImports;
  };
  category?: {
    name: string;
  };
}

const MenuItems: MenuItemsProps[] = [
  {
    category: {
      name: "Estatísticas",
    },
  },
  {
    route: {
      name: "Dashboard",
      path: "/dashboard",
      icon: "layout-dashboard",
    },
  },
  {
    category: {
      name: "Gerenciamento",
    },
  },
  {
    route: {
      name: "Clientes",
      path: "/clients",
      icon: "users-2",
    },
  },
  {
    route: {
      name: "Estoque",
      path: "/stock",
      icon: "warehouse",
    },
  },
  {
    route: {
      name: "Produtos",
      path: "/products",
      icon: "package",
    },
  },
  {
    category: {
      name: "Logística",
    },
  },
  {
    route: {
      name: "Fornecedores",
      path: "/suppliers",
      icon: "building-2",
    },
  },
  {
    category: {
      name: "Financeiro",
    },
  },
  {
    route: {
      name: "Orçamentos",
      path: "/budgets",
      icon: "landmark",
    },
  },
  {
    route: {
      name: "Pedidos",
      path: "/purchase-order",
      icon: "shopping-cart",
    },
  },
  {
    route: {
      name: "Faturamento",
      path: "/invoicing",
      icon: "wallet",
    },
  },
];

export function NavBar() {
  const pathName = usePathname();

  return (
    <div className="w-72 py-4 h-screen flex flex-col items-center justify-between border-r-2 bg-secondary">
      <div className="flex flex-col w-full gap-2">
        {MenuItems.map(({ route, category }, index) => {
          return (
            <div key={index} className="w-full">
              {route && (
                <NavBarItem
                  name={route!.name}
                  icon={route!.icon}
                  path={route!.path}
                  active={pathName === route.path}
                />
              )}
              {category && (
                <div className="w-full flex gap-4 items-center px-3 my-2">
                  <p className="text-xs font-normal text-muted-foreground">
                    {category.name.toUpperCase()}
                  </p>
                  <div className="w-full border-b-2 rounded-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <SwitchTheme />
    </div>
  );
}
