import { createEvent, createStore } from 'effector';

const initialState = [
  {
    date: new Date('11.01.22'),
    transactions: [
      {
        name: 'Pyat',
        value: 567,
      },
    ],
  },
];

const $store = createStore(initialState);
