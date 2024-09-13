import Hero from "./components/Hero";
import OrderSpendTracker from "./components/spendTracker/OrderSpendTracker";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <main className="min-h-screen bg-lightBeige py-12 font-sans">
      <Hero />
      <Wrapper>
        <OrderSpendTracker />
      </Wrapper>
    </main>
  );
}
