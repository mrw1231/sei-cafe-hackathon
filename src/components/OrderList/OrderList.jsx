import '../MenuList/MenuList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({orderHistory}) {
  const ordersDB = orderHistory.map(order =>
    <OrderListItem
      key={order._id}
      orderHistoryItem={order}
    />
  );
  return (
    <main className="MenuList">
        {ordersDB}
    </main>
  );
}