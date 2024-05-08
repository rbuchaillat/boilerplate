import { NewProductForm } from "./_components/form";

export default async function NewProductPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>New Product Form</h2>
      <NewProductForm />
    </div>
  );
}
