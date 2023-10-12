'use client'

import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import useSWR from 'swr';

const Dashboard = () => {
  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  return (
    <div>
      <h1>DESCRIPTION</h1>
    </div>
  )
}

export default Dashboard