import React, { useState, useEffect } from 'react';
import Card from './Card';
import Layout from './Layout';
import TopCustomer from './TopCustomer';
import {
  FaUserAlt,
  FaDollarSign,
  FaClock,
  FaShoppingCart,
} from 'react-icons/fa';
import SalesChart from './SalesChart';
import axios from '../utils/axios';

const Dashboard = () => {
  const [custNumber, setCustNumber] = useState([]);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    getCustomersNumber();
    getTotalTransactions();
  }, []);

  const getCustomersNumber = async () => {
    try {
      const response = await axios.get('customers');
      setCustNumber(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  // get total transactions made (total_biaya)
  const getTotalTransactions = async () => {
    try {
      const response = await axios.get('transactions');
      const total = response.data.reduce((acc, curr) => {
        return acc + curr.total_biaya;
      }, 0);
      setTransaction(total);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className='flex flex-row justify-between mb-6'>
        <h1>Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4'>
        <Card
          title='Total Customers'
          subtitle={custNumber}
          icon={<FaUserAlt />}
        />
        <Card
          title='Total Transactions'
          subtitle={`Rp ${transaction
            .toLocaleString('id-ID')
            .replace(',', '.')},00`}
          icon={<FaDollarSign />}
        />
        <Card title='On Rent' subtitle='16' icon={<FaClock />} />
        <Card title='Rent Today' subtitle='4' icon={<FaShoppingCart />} />
      </div>
      <div className='flex flex-row flex-wrap lg:flex-nowrap mb-4'>
        <div className='w-full lg:w-2/3 mb-4 lg:mr-4'>
          <SalesChart />
        </div>
        <div className='w-full lg:w-1/3'>
          <TopCustomer />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
