import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#3b3f5c]">
      {/* App Shell */}
      <div className="flex h-scre w-full  bg-[#0e1325] overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex flex-1 flex-col">
          {/* Topbar stays natural height */}
          <Topbar />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto px-6 pb-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
