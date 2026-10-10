// The catalogue number of the plate at a zero-based position: 0 is "01".
export function plateNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}
