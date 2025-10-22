import DashboardHeader from "@/components-pages/dashboard/dashboard-layout/DashboardHeader/DashboardHeader";
import DashboardFooter from "@/components-pages/dashboard/dashboard-layout/DashboardFooter/DashboardFooter";
import s from './layout.module.scss'

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{background: '#F2F6F6', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <DashboardHeader/>
      <main className={s.main}>
        {children}
      </main>
      <DashboardFooter/>
    </div>

  );
}
