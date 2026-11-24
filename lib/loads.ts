// Sample booked loads shown in the hero LoadCard. Rate per mile is computed from rate / miles.
// TODO: replace with real booked loads.
export type Load = { from: string; to: string; truck: string; miles: number; rate: number };

export const LOADS: Load[] = [
  { from: 'Dallas, TX', to: 'Atlanta, GA', truck: 'Dry Van', miles: 781, rate: 2450 },
  { from: 'Chicago, IL', to: 'Denver, CO', truck: 'Reefer', miles: 1003, rate: 3380 },
  { from: 'Houston, TX', to: 'Memphis, TN', truck: 'Flatbed', miles: 562, rate: 1890 },
  { from: 'Phoenix, AZ', to: 'Los Angeles, CA', truck: 'Step Deck', miles: 372, rate: 1420 },
  { from: 'Columbus, OH', to: 'Charlotte, NC', truck: 'Box Truck', miles: 427, rate: 1150 },
  { from: 'Laredo, TX', to: 'Nashville, TN', truck: 'Dry Van', miles: 1062, rate: 2980 },
  { from: 'Fresno, CA', to: 'Seattle, WA', truck: 'Reefer', miles: 853, rate: 2900 },
  { from: 'Birmingham, AL', to: 'Indianapolis, IN', truck: 'Hotshot', miles: 486, rate: 1260 },
  { from: 'Kansas City, MO', to: 'Minneapolis, MN', truck: 'Power Only', miles: 441, rate: 1100 },
  { from: 'Jacksonville, FL', to: 'Newark, NJ', truck: 'Auto Carrier', miles: 914, rate: 3650 },
];
