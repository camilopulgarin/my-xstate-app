import { createMachine } from 'xstate';


const bookingMachine = createMachine({
  id: "buy plane tockets",
  initial: "home",
  states: {
    home: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: "passengers",
        CANCEL: "home",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "home",
      },
    },
    tickets: {
      on: {
        BUY: "thanks",
        CANCEL: "home",
      },
    },
    thanks: {
      on: {
        FINISH: "home",
      },
    },
  },
});

export default bookingMachine;