import { useMachine } from "@xstate/react"
import bookingMachine from "../Machines/bookingMachine"

export const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine)

    console.log(state.value) // This will log the current state of the machine
    return (
        <div>Hola</div>
    )
}