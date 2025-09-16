import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Booking() {
  const [rows,setRows] = useState<any[]>([])
  useEffect(() => { axios.get('/booking').then(r=>setRows(r.data??[])).catch(()=>setRows([])) }, [])
  return <div><h3>booking — coach-pwa</h3><pre>{JSON.stringify(rows,null,2)}</pre></div>
}