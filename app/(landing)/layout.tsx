import { AuthMenu } from "@/components/auth-menu";
import { Header } from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header>
        <Badge variant="secondary">code realm</Badge>
        <div className="flex gap-x-4 items-center">
          <ModeToggle />
          <AuthMenu />
        </div>
      </Header>
      {children}
    </div>
  );
}
