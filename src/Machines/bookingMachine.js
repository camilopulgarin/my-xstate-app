import { assign, createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry: ""
  },
  states: {
    initial: {
      on: {
        START: {
          target: "search"
        },
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: "passengers",
          actions: "updateCountry"
        },
        CANCEL: "initial",
      },
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
        ADD: {
          target: "passengers",
          actions: assign({
            passengers:  ({ context, event }) => [
              ...context.passengers, 
              event.newPassenger // Asegúrate de que el evento tiene esta propiedad
            ]
          })
        }
      },
    },
  },
},
{
  actions: {
    updateCountry: assign({
    selectedCountry: ({ event }) => event.selectedCountry
  })
  }
});

export default bookingMachine;