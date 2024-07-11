import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Particpant {
    id: string
    name: string | null
    email: string
    is_confirmed: boolean
}

export function Guests() {
    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Particpant[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId])


    // Convidados
    return (
        <div className="space-y-6">
            <h2 className="font-semibold font-xl">Lista de Convidados</h2>

            {/* lista de convidados */}
            <div className="space-y-5">
                {/* convidados 1 */}

                {participants.map((participants, index) => {
                    return (
                        <div key={participants.id} className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-100">{participants.name ?? `Convidado ${index}`}</span>
                                <span className="block text-sm text-zinc-400 truncate ">{participants.email}</span>
                            </div>
                            {participants.is_confirmed ? (
                                <CircleCheck className="text-lime-300 size-5 shrink-0" />
                            ) : (
                                <CircleDashed className="size-5 shrink-0 text-zinc-400" />
                            )}
                        </div>
                    )
                })}

                {/* convidados 2 */}
                {/* <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Wilfred Dickens III</span>
                        <span className="block text-sm text-zinc-400 truncate ">marian.hyatt@hotmail.com</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div> */}
            </div>

            {/* Gerenciar Convidados */}
            <Button variant="secundary" size="full">
                <UserCog className='size-5' />
                Gerenciar Convidados
            </Button>
        </div>
    )
}