import { Zap } from "lucide-react"

export default function V2Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#0F7A7E]/20 bg-[#0F7A7E]/5 px-4 py-2 text-sm font-semibold text-[#0F7A7E] mb-6">
      <Zap className="h-4 w-4" />
      <span>Nuevo en v2.0</span>
    </div>
  )
}
