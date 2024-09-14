import Hero from "./components/Hero";
import OrderSpendTracker from "./components/OrderSpendTracker";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col gap-12 justify-center items-center bg-lightBeige py-12 font-sans">
      <Hero />
      <Wrapper>
        <OrderSpendTracker />
      </Wrapper>
    </main>
  );
}
