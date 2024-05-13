export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export interface PropOptions {
  attribute?: string;
  mutable?: boolean;
  reflect?: boolean;
}