import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <br/>
      <br/>
      <Link href="/dashboard">Личный кабинет - Перейти</Link>
      <br/>
      <br/>
      <br/>
      <p className="container">
        Home
      </p>
    </div>
  );
}
