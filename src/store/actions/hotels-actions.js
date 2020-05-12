export const saveText = (text) => {
    return {
        type: 'SAVE_TEXT',
        payload: text
    };
}


export const saveHotels = (hotels) => {
    return {
        type: "SAVE_HOTELS",
        payload: hotels,
    }
}