import BearState from "./_components/bears";

export default function Bear() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center gap-x-4">
        <code>Bears state with zustand:</code>
        <BearState />
      </div>
    </section>
  );
}
