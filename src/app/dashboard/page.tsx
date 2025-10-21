import s from './dashboard-page.module.scss';
import DashboardSidebar from "@/components-pages/dashboard/dashboard-main/DashboardSidebar/DashboardSidebar";
import DashboardContent from "@/components-pages/dashboard/dashboard-main/DashboardContent/DashboardContent";

const Page = () => {
  return (
    <div className="container">
      <div className={s.dashboardPageWrapper}>
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Page;