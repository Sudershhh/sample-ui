import ButtonsClient from "@/components/Buttons/ButtonsClient";
function ButtonsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Buttons</h1>
        <ButtonsClient />
      </main>
    </div>
  );
}

export default ButtonsPage;
