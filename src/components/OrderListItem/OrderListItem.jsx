import '../MenuListItem/MenuListItem.css';
import {Link} from 'react-router-dom';

export default function OrderListItem({orderHistoryItem , key}) {
  

    return (
        <Link to="/orders/orderHistoryItem._id">
            <div className="MenuListItem">
            <div className="name">Order ID: {orderHistoryItem.orderId} </div>
            <div className="name">{new Date(orderHistoryItem.createdAt).toLocaleDateString()} </div>
            <div className="name">${orderHistoryItem.orderTotal.toFixed(2)} </div>
            <div className="name">{orderHistoryItem.totalQty} items</div>
            <div className="buy">
                <span></span>
            </div>
            </div>
        </Link>
  );
}