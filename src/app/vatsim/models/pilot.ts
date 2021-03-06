import { Client } from './client';

export interface Pilot extends Client {
  aircraft: string;
  heading: number;
  from: string;
  to: string;
  groundSpeed: number;
  flightPhase: 'departing' | 'airborne' | 'arrived';
}

export function isPilot(client: Client): client is Pilot {
  return client.type === 'pilot';
}
