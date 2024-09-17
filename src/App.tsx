import Hero from "./components/Hero/Hero";
import OrderSpendTracker from "./components/OrderSpendTracker";

export default function App() {
  return (
    <main className="lg:my-4 max-w-6xl mx-auto">
      <div className="flex flex-col gap-12 rounded-3xl justify-center items-center bg-lightBeige font-sans min-h-screen">
        <Hero />
        <OrderSpendTracker />
      </div>
    </main>
  );
}
