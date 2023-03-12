import React from 'react';
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

const Dashboard = () => {
  return (
    <Layout>
      <div className='flex flex-row justify-between mb-6'>
        <h1>Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4'>
        <Card
          title='Total Customers'
          subtitle='1564'
          icon={<FaUserAlt />}
          color='orange'
        />
        <Card
          title='Total Transactions'
          subtitle='Rp 121.450.000'
          icon={<FaDollarSign />}
          color='blue'
        />
        <Card title='On Rent' subtitle='16' icon={<FaClock />} color='teal' />
        <Card
          title='Sales Today'
          subtitle='4'
          icon={<FaShoppingCart />}
          color='green'
        />
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
