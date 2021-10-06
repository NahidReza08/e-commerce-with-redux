import MenubarActionType from "../actionTypes/MenubarActionType";

const {SHOW_MENUBAR,HIDE_MENUBAR} = MenubarActionType;

const initialState = {
    menubarDisplay: "hidden",
}

const MenubarReducer = (state=initialState, action) => {
    switch(action.type) {
        case SHOW_MENUBAR:
            return {menubarDisplay:"block"}
        case HIDE_MENUBAR:
            return {menubarDisplay:"hidden"}
        default:
            return state
    }
}

export default MenubarReducer;