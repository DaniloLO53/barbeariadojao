'use client'

import axios from "axios";
import { useEffect, useState } from "react"

export default function Home() {
  const [dbClicks, setDbClicks] = useState(0);
  const [clicks, setClicks] = useState(0);

  async function loadClicks() {
    const { data } = await axios({
      url: (process.env.NEXT_PUBLIC_SERVER_URL as string) + '/clicks',
      method: 'get'
    });
    setDbClicks(data.clicks);
  }

  async function updateClicks() {
    await axios({
      url: (process.env.NEXT_PUBLIC_SERVER_URL as string) + '/clicks',
      method: 'put'
    });
    setClicks((prevState) => prevState + 1);
  }

  useEffect(() => {
    loadClicks();
  }, []);

  return (
    <main>
      <button
        type="button"
        onClick={() => updateClicks()}
      >
        Click
      </button>
      <h1>Clicks: { clicks }</h1>
      <h1>Db clicks: { dbClicks }</h1>
    </main>
  )
}