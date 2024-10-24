import type { Metadata } from "next";
import { Sidebar, TopMenu, Activity } from "./components";
import { ActivityInterface } from "./interfaces";

export const metadata: Metadata = {
  title: "Rest todos",
  description: "Rest todos",
};

const activities: ActivityInterface[] = [
  {
    title: "Global Activities",
    cost: 23988,
    percentage: 2,
    description: "Compared to last week $13,988",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
          <TopMenu />
          <div className="px-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity: ActivityInterface, index) => {
                return (
                  <Activity
                    key={index}
                    title={activity.title}
                    cost={activity.cost}
                    percentage={activity.percentage}
                    description={activity.description}
                  />
                );
              })}
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
