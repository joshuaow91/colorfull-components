import { XCircleIcon } from "@heroicons/react/24/solid";
import { DroppedItemProps } from "../../propTypes/dropAreaPropTypes";

export function DroppedItem({ id, name, cost, removeItem }: DroppedItemProps) {
  return (
    <div className="p-2 rounded-xl bg-coral text-lightBeige font-bold">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-lightBeige text-coral rounded-full px-3 py-1 text-sm font-bold shadow-md">
          ${cost.toFixed(2)}
        </span>

        <button
          onClick={() => removeItem(id)}
          className="text-white hover:text-white/90"
        >
          <XCircleIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-center items-center">
        <span className="text-lg">{name}</span>
      </div>
    </div>
  );
}
