import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartReducer from "./CartReducer";
import MenubarReducer from "./MenubarReducer";
import ProductsReducer from "./ProductsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist:['CartReducer','ProductsReducer']
};

const RootReducer = combineReducers({
  MenubarReducer,
  CartReducer,
  ProductsReducer,
});

export default persistReducer(persistConfig, RootReducer);
