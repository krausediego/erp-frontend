import { Content } from "@/components/content";
import { Client, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Client[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "Diego",
      email: "diegoemanuelk@gmail.com",
      phone: "(47) 99265-6515",
    },
    {
      id: "2",
      name: "Zézinho",
      email: "zeze@gmail.com",
      phone: "(11) 11111-1111",
    },
    {
      id: "3",
      name: "Mauro",
      email: "zeze@gmail.com",
      phone: "(11) 11111-111122",
    },
    // ...
  ];
}

export default async function ClientsPage() {
  const data = await getData();

  return (
    <Content className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </Content>
  );
}
