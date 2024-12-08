export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items yout packing list
      </footer>
    );
  const itemQuantity = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / itemQuantity) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You got everything! Ready to go ✈️"
        : `You have ${itemQuantity} items on your list, and you already packed
      ${itemPacked} (${percentage})%`}
    </footer>
  );
}
