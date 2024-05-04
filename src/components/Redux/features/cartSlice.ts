import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Iproduct {
    id: string
    title: string
    price: number
    quantity: number
}

const initialState: Array<Iproduct> = []

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addTocart: (state, action: PayloadAction<Iproduct>) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload)
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id ? {
                        ...item, quantity: item.quantity
                            + 1
                    } : item;
                })
            }
        },

        removeFromcart: (state, action: PayloadAction<string>) => {
            const id = action.payload
            return state.filter((item) => item.id !== id)
        }
    }
})

export const { addTocart, removeFromcart } = cartSlice.actions
export default cartSlice.reducer;