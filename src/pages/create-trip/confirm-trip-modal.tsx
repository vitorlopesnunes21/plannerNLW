import { User, X, Mail } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeConfirmTripModal,
    createTrip
}: ConfirmTripModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                {/* div textos do inicio do modal */}
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                        <button onClick={closeConfirmTripModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'> Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100' > 16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
                    </p>
                </div>

                {/* Formulário */}
                <form onSubmit={createTrip} className='space-y-3'>
                    {/* input nome completo */}
                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <User className='text-zinc-400 size-5' />
                        <input
                            name='name'
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    {/* input email pessoal */}
                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Mail className='text-zinc-400 size-5' />
                        <input
                            type="email"
                            name='email'
                            placeholder="Seu nemail pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>
                    {/* botão */}
                    <Button type='submit' variant="primary" size="full">
                        Confirmar criação da viagem
                    </Button>

                </form>
            </div>
        </div>
    )
}