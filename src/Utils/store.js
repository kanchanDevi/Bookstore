import Cartslice from "./Cartslice";

const { configureStore } = require("@reduxjs/toolkit");
const store=configureStore({

    reducer:{
        cart:Cartslice
    },
});

export default store