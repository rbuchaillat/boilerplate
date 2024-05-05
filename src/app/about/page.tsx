import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center gap-x-4">
        <code>shadcn/ui:</code>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex items-center gap-x-4">
        <code>Lucide icons:</code>
        <Camera color="red" size={48} />
      </div>
    </section>
  );
}
