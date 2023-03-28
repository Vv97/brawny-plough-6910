// get local data
export const getLocalData = (key) => {
    try {
        let temp = JSON.parse(localStorage.getItem(key));
        return temp;
    } catch (e) {
        return undefined;
    }
};


// set local data 
export const setLocalDate = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
};

