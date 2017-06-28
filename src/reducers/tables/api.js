import { API } from 'setup/config';

export function getTables() {
  return fetch('https://damp-garden-61269.herokuapp.com')
    .then(res => res.json());
}

export function loadSeatings() {
  return fetch(`${API}seats`)
    .then(res => res.json());
}

export function saveSeatings(seatings) {
  return fetch(`${API}seats`, { method: 'POST', body: JSON.stringify(seatings) })
    .then(res => res.json());
}
