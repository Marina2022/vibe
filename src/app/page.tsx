'use client'

import Link from "next/link";
import {useEffect} from "react";

export default function Home() {


  return (
    <div className="container">
      <br/>
      <br/>
      <Link href="/dashboard">Личный кабинет - Перейти</Link>
      <br/>
      <br/>
      <Link href="/login">Экран авторизации - Перейти</Link>
      <br/>
      <br/>
      <br/>
      <p className="container">
        Home
      </p>
    </div>
  );
}
