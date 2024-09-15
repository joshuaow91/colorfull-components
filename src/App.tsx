import Hero from "./components/Hero";
import OrderSpendTracker from "./components/OrderSpendTracker";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col gap-12 justify-center items-center bg-lightBeige py-12 font-sans">
      <Hero />
      <OrderSpendTracker />
    </main>
  );
}
