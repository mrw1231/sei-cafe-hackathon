import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from "../../components/OrderList/OrderList";
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from "../../components/OrderDetail/OrderDetail";


export default function OrderHistoryPage({ user, setUser }) {

  const [orderHistory, setOrderHistory] = useState([])
  const [activeOrder, setActiveOrder] = useState(orderHistory[0])



  useEffect(function () {
    async function getOrders () {
      const orders = await ordersAPI.getAll();
      setOrderHistory(orders);
    }
    getOrders();
  }, [])


  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orderHistory= {orderHistory} />
      <OrderDetail/>



    </main>
  );
}