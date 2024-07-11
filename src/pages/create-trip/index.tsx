import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'
// import axios from 'axios'

export function CreateTripPage() {
    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsIputOpen] = useState(false)
    const [isGuestsModel, setIsGuestsModel] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [eventStartAndDates, setEventStartAndDates] = useState<DateRange | undefined>()

    const [emailsToInvite, setEmailsToInvite] = useState([
        'vitorlopwa040805@gmail.com'
    ])

    function openGuestsIput() {
        setIsGuestsIputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsIputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestsModel(true)
    }

    function closeGuestsModal() {
        setIsGuestsModel(false)
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])

        event.currentTarget.reset()
    }

    function removeEmailToInvites(emaiToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emaiToRemove)

        setEmailsToInvite(newEmailList)
    }

    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log(destination)
        console.log(eventStartAndDates)
        console.log(emailsToInvite)
        console.log(ownerName)
        console.log(ownerEmail)

        if (!destination) {
            return
        }

        if (!eventStartAndDates?.from || !eventStartAndDates?.to) {
            return
        }

        if (emailsToInvite.length === 0) {
            return
        }

        if (!ownerEmail || !ownerName) {
            return
        }


        const response = await api.post(`/trips`, {
            destination: destination,
            starts_at: eventStartAndDates.from,
            ends_at: eventStartAndDates.to,
            emails_to_invite: emailsToInvite,
            owner_name: ownerName,
            owner_email: ownerEmail
        }
    )

        const { tripId } = response.data


        navigate(`/trips/${tripId}`)
    }

    return (
        // div global
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            {/* div conteudo */}
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                {/* div logo-textinho */}
                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="plann.er" />

                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                {/* div para espaço local&data - input convidar email */}
                <div className='space-y-4'>
                    {/* div local e data */}
                    <DestinationAndDateStep
                        closeGuestsInput={closeGuestsInput}
                        isGuestsInputOpen={isGuestsInputOpen}
                        openGuestsIput={openGuestsIput}
                        setDestination={setDestination}
                        setEventStartAndDates={setEventStartAndDates}
                        eventStartAndDates={eventStartAndDates}
                    />

                    {/* div input email */}
                    {isGuestsInputOpen && (
                        // div botão convidar/confirmar
                        <InviteGuestsStep
                            emailsToInvite={emailsToInvite}
                            openConfirmTripModal={openConfirmTripModal}
                            openGuestsModal={openGuestsModal}
                        />
                    )}
                </div>

                <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a href="#" className="text-zinc-300 underline">termos de uso </a>e <a href="" className="text-zinc-300 underline">políticas de privacidade</a>.</p>
            </div>

            {/* Modal de convidados */}
            {isGuestsModel && (
                <InviteGuestsModal
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuestsModal={closeGuestsModal}
                    removeEmailToInvites={removeEmailToInvites}
                />
            )}


            {/* Confirmação de viagem */}
            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                    setOwnerName={setOwnerName}
                    setOwnerEmail={setOwnerEmail}
                />
            )}

        </div>
    )
}
