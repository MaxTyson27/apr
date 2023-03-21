import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchPizzasArgs, PizzaType } from "./types";

export const fetchPizzas = createAsyncThunk<PizzaType[], FetchPizzasArgs>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { currentPage, category, sortBy, sortOrder, search } = params;
    const { data } = await axios.get<PizzaType[]>(
      `https://63d91b485a330a6ae174b73e.mockapi.io/items?limit=4&page=${currentPage}${category}&sortBy=${sortBy}&order=${sortOrder}${search}`
    );

    return data;
  }
);