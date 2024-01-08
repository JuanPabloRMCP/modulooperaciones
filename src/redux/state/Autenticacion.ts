import { createSlice } from '@reduxjs/toolkit';

interface IAutenticacion {
  listarAutenticacion: { id: string; nombre: string; cargo: string } | null;
}

export const autenticacionInitialState: IAutenticacion = {
  listarAutenticacion: null,
};

export const autenticacionSlice = createSlice({
  name: 'Autenticacion',
  initialState: autenticacionInitialState,
  reducers: {
    onListarAutenticacion: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { onListarAutenticacion } = autenticacionSlice.actions;

export default autenticacionSlice.reducer;
