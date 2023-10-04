"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/schemas/auth";
import { useAuthLogin } from "@/services/hooks/auth";
import { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

interface LoginFormProps extends ComponentProps<"div"> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync, isLoading } = useAuthLogin();

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    try {
      await mutateAsync(values);

      toast({
        title: "Login realizado",
        variant: "success",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao realizar o login",
        description: error?.response?.data?.message || "Erro desconhecido",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={cn("grid p-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@example.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label>Senha</Label>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <Input placeholder="********" type="password" {...field} />
                  );
                }}
              />
            </div>
            <Button disabled={isLoading} type="submit">
              Entrar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
