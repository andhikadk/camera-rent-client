import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../utils/axios';
import TableTransaction from './TableTransaction';
import { FaSun, FaMoon } from 'react-icons/fa';
import Layout from './Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-row justify-between mb-8'>
          <h1>Transactions</h1>
        </div>
        <TableTransaction />
      </div>
    </Layout>
  );
};

export default Dashboard;
