export type FetchPizzasArgs = {
  currentPage: number
  category: string
  sortBy: string
  sortOrder: string
  search: string
}

export type PizzaType = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  types: number[],
  sizes: number[],
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface PizzaSliceState {
  items: PizzaType[],
  status: Status
}
