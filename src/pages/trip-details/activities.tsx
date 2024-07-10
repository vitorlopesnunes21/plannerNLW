import { CircleCheck } from "lucide-react";

export function Activities() {
    return (
    <div className="space-y-8">
        {/* dia sem atividade */}
        <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
                <span className="fot-xl text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
            </div>
            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p>
        </div>

        {/* dia com atividade */}
        <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
                <span className="fot-xl text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
            </div>
            {/* atividade 1 */}
            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                    <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                </div>
            </div>
            {/* atividade 2 */}
            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                    <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                </div>
            </div>
        </div>
    </div>
)
}