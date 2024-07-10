import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return (
        // Links importantes
        <div className="space-y-6" >
            <h2 className="font-semibold font-xl">Links importantes</h2>

            {/* lista de link */}
            <div className="space-y-5">
                {/* link 1 */}
                <div className="flex items-center justify-between gap-4">
                    {/* texto */}
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/104dadasdasdas700011</a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
                {/* link 2 */}
                <div className="flex items-center justify-between gap-4">
                    {/* texto */}
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Regras da casa</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/104dadasdasdas700011</a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            {/* Cadastrar novo link */}

            <Button variant="secundary" size="full">
                <Plus />
                Cadastrar novo link
            </Button>
        </div >
    )
}