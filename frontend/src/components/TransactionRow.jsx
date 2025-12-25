function TransactionRow({ description, amount, amountColor, category, date }) {
    return (
      <tr className="border-b border-gray-700">
        <td className="py-2">{description}</td>
        <td className={`py-2 font-semibold ${amountColor}`}>{amount}</td>
        <td className="py-2">{category}</td>
        <td className="py-2">{date}</td>
      </tr>
    );
  }
  
  export default TransactionRow;
  