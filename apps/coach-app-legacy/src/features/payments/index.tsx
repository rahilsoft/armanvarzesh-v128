import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Payments() {
  const [rows,setRows] = useState<any[]>([])
  useEffect(() => { axios.get('/payments').then(r=>setRows(r.data??[])).catch(()=>setRows([])) }, [])
  return <div><h3>payments — coach-pwa</h3><pre>{JSON.stringify(rows,null,2)}</pre></div>
}