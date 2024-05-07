"use client";

import { useBearStore } from "@/stores/use-bear-store";
import { Button } from "@/components/ui/button";

export default function BearState() {
  const { bears, increase } = useBearStore((state) => ({
    bears: state.bears,
    increase: state.increase,
  }));

  return (
    <div className="flex flex-col gap-y-4 items-center">
      {bears}
      <Button onClick={increase}>add bear</Button>
    </div>
  );
}
