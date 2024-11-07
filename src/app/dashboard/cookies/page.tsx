import { TabBar } from "../components";

export default function CookiesPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <TabBar />
      </div>
    </div>
  )
}