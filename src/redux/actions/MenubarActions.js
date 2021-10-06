import MenubarActionType from "../actionTypes/MenubarActionType";

const {SHOW_MENUBAR,HIDE_MENUBAR} = MenubarActionType;

export const showMenubar = () => ({
    type:SHOW_MENUBAR
})

export const hideMenubar = () => ({
    type:HIDE_MENUBAR
})