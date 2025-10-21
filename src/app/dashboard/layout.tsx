import DashboardHeader from "@/pages-components/dashboard/dashboard-layout/DashboardHeader/DashboardHeader";
import DashboardFooter from "@/pages-components/dashboard/dashboard-layout/DashboardFooter/DashboardFooter";

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{background: '#F2F6F6', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <DashboardHeader/>
      <main style={{flex: 1}}>
        {children}
      </main>
      <DashboardFooter/>
    </div>

  );
}
