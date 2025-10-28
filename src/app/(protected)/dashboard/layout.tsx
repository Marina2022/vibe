import DashboardHeader from "@/components-pages/dashboard/dashboard-layout/DashboardHeader/DashboardHeader";
import DashboardFooter from "@/components-pages/dashboard/dashboard-layout/DashboardFooter/DashboardFooter";
import s from './layout.module.scss'
import {getUserIdFromToken} from "@/features/auth/lib/getUserFromToken";
import {logout} from "@/features/auth/actions/logout";

export default async function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {

  const userFromToken = await getUserIdFromToken()
  const userId =  userFromToken?.iss
  if (!userFromToken?.iss) {
    await logout()
  }
  const response = await fetch(`${process.env.API_URL}/user/${userId}`, {})
  if (!response.ok) {
    await logout()
  }
  const user = await response.json()


  return (
    <div style={{background: '#F2F6F6', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <DashboardHeader />
      <main className={s.main}>
        {children}
      </main>
      <DashboardFooter/>
    </div>

  );
}
