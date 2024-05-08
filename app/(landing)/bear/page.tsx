import { Bear } from "./_components/bears";

export default function BearPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center gap-x-4">
        <code>Bears state with zustand:</code>
        <Bear />
      </div>
    </section>
  );
}
