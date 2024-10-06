# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

//cart
-> create [store] folder
    -> create file[Cart.jsx] and config
        import CreateSlice from "@reduxjs/toolkit"
    cartSlice={
              CreateSlice
        {
            initializeState:
            reducer:{
            addFunction:{

            }
            changeFunction
            }


        }
    }
         
    export default cartSlice.reducer;

    -> create file[index.jsx] and config
    import ConfigureStore from"..."
    export const store = configureStore({
        reducer:{
            cart: cartReducer,
        }
    })

    set up 


    
   