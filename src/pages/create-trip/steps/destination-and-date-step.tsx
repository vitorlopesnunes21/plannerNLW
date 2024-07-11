import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns'

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    eventStartAndDates: DateRange | undefined
    closeGuestsInput: () => void
    openGuestsIput: () => void
    setDestination: (destination: string) => void
    setEventStartAndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
    closeGuestsInput,
    isGuestsInputOpen,
    openGuestsIput,
    setDestination,
    setEventStartAndDates,
    eventStartAndDates
}: DestinationAndDateStepProps) {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

    function openDatePicker() {
        return setIsDatePickerOpen(true)
    }
    function closeDatePicker() {
        return setIsDatePickerOpen(false)
    }

    const displayedDate = eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to ? format(eventStartAndDates.from, "d' de ' LLL").concat(' até ').concat(format(eventStartAndDates.to, "d' de ' LLL")) : null

    return (
        <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center shadow-shape gap-3">

            {/* local */}
            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400 ' />
                <input 
                disabled={isGuestsInputOpen} 
                type="text" 
                placeholder="Para onde você vai?" 
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" 
                onChange={event => setDestination(event.target.value)}/>
            </div>
            {/* data */}
            <Button onClick={openDatePicker} disabled={isGuestsInputOpen} className='flex items-center gap-2 outline-none' variant="secundary">
                <Calendar className='size-5 text-zinc-400 ' />
                {displayedDate || "Quando?"}
            </Button>

            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                        {/* div textos do inicio do modal */}
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-lg font-semibold'>Selecione a data</h2>
                                <button onClick={closeDatePicker}>
                                    <X className='size-5 text-zinc-400' />
                                </button>
                            </div>

                        </div>

                        <DayPicker mode="range" selected={eventStartAndDates} onSelect={setEventStartAndDates} />
                    </div>
                </div>
            )}



            <div className='w-px h-6 bg-zinc-800' />

            {/* alterar lcoal/data e botão continuar */}
            {
                isGuestsInputOpen ? (
                    <Button onClick={closeGuestsInput} variant="secundary" >
                        Alterar local/data
                        <Settings2 className='size-5' />
                    </Button>
                ) :
                    <Button onClick={openGuestsIput} variant="primary">
                        Continuar
                        <ArrowRight className='size-5' />
                    </Button>
            }
        </div >
    )
}