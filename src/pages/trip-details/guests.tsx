import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    // Convidados
    return (
        <div className="space-y-6">
            <h2 className="font-semibold font-xl">Lista de Convidados</h2>

            {/* lista de convidados */}
            <div className="space-y-5">
                {/* convidados 1 */}
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Wilfred Dickens III</span>
                        <span className="block text-sm text-zinc-400 truncate ">marian.hyatt@hotmail.com</span>
                    </div>
                    <CircleCheck className="text-lime-300 size-5 shrink-0" />
                </div>

                {/* convidados 2 */}
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Wilfred Dickens III</span>
                        <span className="block text-sm text-zinc-400 truncate ">marian.hyatt@hotmail.com</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            {/* Gerenciar Convidados */}
            <Button variant="secundary" size="full">
                <UserCog className='size-5' />
                Gerenciar Convidados
            </Button>
        </div>
    )
}