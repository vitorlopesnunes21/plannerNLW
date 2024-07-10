import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }

    return (
        // div conteúdo geral
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            {/* div header */}
            <DestinationAndDateHeader/>

            {/* conteúdo */}
            <main className="flex gap-16 px-4">
                {/* div atividades */}
                <div className="flex-1 space-y-6">
                    {/* div miini cabeçalho */}
                    <div className="flex  items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-lime-400'>
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </button>
                    </div>

                    {/* div com todos os dias e atividades */}
                    <Activities/>
                </div>

                {/* div da direita da página */}
                <div className="w-80 space-y-6">
                    {/* links importantes */}
                   <ImportantLinks/>

                    {/* Convidados */}
                    <Guests/>

                </div>
            </main>


            {isCreateActivityModalOpen && (
                <CreateActivityModal
                closeCreateActivityModal={closeCreateActivityModal}
                />
            )}
        </div>
    )
}