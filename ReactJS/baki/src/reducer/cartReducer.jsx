    import { createContext, useContext, useEffect, useReducer } from "react";



    const CartContext = createContext();


    const initialState = {
        items: JSON.parse(localStorage.getItem('cart')) || [],
    };

    export const cartReducer = (state, action) => { 
        console.log("quantity:",action.q);
        switch (action.type) {
            case "ADD_TO_CART":
                const existItem = state.items.findIndex(
                    (item) => item._id === action.payload._id
                )
                console.log("ok");
                
                if (existItem !== -1 ) {
                    const updateItems = [...state.items];
                    updateItems[existItem].quantity += action.q;
                    console.log("result in :",updateItems[existItem]);
                    return { ...state, items: updateItems }
                }
                else {
                    return {
                        ...state,
                        items: [...state.items, { ...action.payload, quantity: action.q }],
                    }
                }
            
            case "CLEAR_CART": {
                return {
                    ...state,
                    items:[]};
            }
            default:
                return console.log("no option");
                
        }

    }
    export const CartProvider = ({ children }) => {
        const [state, dispatch] = useReducer(cartReducer, initialState);

            useEffect(()=>{
                localStorage.setItem('cart',JSON.stringify(state.items))
            },[state.items] 
        );

        return (<>
            <CartContext.Provider value={{ state, dispatch }}>
                {children}
            </CartContext.Provider>
        </>)
    }
    export const useCart = () => {
        return useContext(CartContext);
    }