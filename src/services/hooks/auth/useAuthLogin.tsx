import { server } from "@/services/infra";
import { ILogin } from "@/types/auth";
import { client } from "@/utils/providers";
import { useMutation } from "@tanstack/react-query";

export function useAuthLogin() {
  return useMutation(
    async (data: ILogin) => {
      const {
        data: { token },
      } = await server.post<ILogin.Response>("/login", { ...data });
      return token;
    },
    { onSuccess: async (user) => client.setQueryData(["user"], user) }
  );
}
