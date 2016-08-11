export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export function increase() {
  return {
    type: INCREASE,
  }
}
export const decrease = () => ({
    type: "DECREASE"
})