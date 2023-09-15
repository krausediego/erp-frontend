import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface LoginFormProps extends ComponentProps<"div"> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  return (
    <div className={cn("grid p-6", className)} {...props}>
      <form>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-2">
            <Label>Senha</Label>
            <Input id="password" placeholder="********" type="password" />
          </div>
          <Button>Entrar</Button>
        </div>
      </form>
    </div>
  );
}
