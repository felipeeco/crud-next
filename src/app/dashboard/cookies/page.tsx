import { cookies } from 'next/headers';
import { TabBar } from "../components";

export default function CookiesPage() {
   
  const cookieStore = cookies();
  const tabValueCookie = Number(cookieStore.get('selectedTab')?.value ?? 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <TabBar currentTab={tabValueCookie} />
      </div>
    </div>
  )
}