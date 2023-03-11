import { createContext,  useState } from "react";

export const SaleContext = createContext({
    addNewItems: () => {},
    newItems: [],
})

const addNewProducts = (newItems, itemToAdd) => {
    const existingNewItem = newItems.find(
        (newItem) => newItem.id === itemToAdd.id
    );
  
    if(existingNewItem) {
        return newItems.map((newItem) => 
            newItem.id === itemToAdd.id 
            ? {...newItem} 
            : newItem
        );
    }
    return [...newItems, {...itemToAdd}];
}


export const SaleProvider = ({children}) => {
    
    const [newItems, setNewItems] = useState([]);
    

    const addNewItems = (itemToAdd) => {
        setNewItems(addNewProducts(newItems, itemToAdd));
    }


    const value = {addNewItems};

    return (
        <SaleContext.Provider value={value}>{children}</SaleContext.Provider>
    )
}