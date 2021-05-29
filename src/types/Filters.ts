export default interface Filters {
    type: string;
    key: string;
    defaultOption?: string;
    min?: string;
    max?: string;
    label: string;
    options?: { label: string; value: { min: number; max: number } }[];
  }