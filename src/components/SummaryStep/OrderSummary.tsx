import { OrderSummaryProps } from "../../propTypes/orderSummaryPropTypes";

export default function OrderSummary({
  items,
  time,
  setTime,
}: OrderSummaryProps) {
  return (
    <div className="pt-4">
      <h3 className="text-xl font-bold">Order Summary</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.cost}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <label>Select Delivery Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border rounded p-2"
        />
      </div>
    </div>
  );
}
