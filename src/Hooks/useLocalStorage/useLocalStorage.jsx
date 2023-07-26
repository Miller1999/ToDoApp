    import { useState,useEffect } from "react"
    
    function useLocalStorage (itemName, initialValue) {
        const [item, setItem] = useState(initialValue)
        const [loading, setloading] = useState(true)
        const [error, setError] = useState(false)
        
        useEffect(()=>{
            setTimeout(()=>{
                try{
                    const localStorageItem = localStorage.getItem(itemName)
                    let parsedItem
                    if(!localStorageItem){
                        localStorage.setItem(itemName,JSON.stringify(initialValue))
                        parsedItem = initialValue
                        } else {
                        parsedItem = JSON.parse(localStorageItem)
                        setItem(parsedItem)
                        }
                    setloading(false)
                }
                catch{
                    setloading(false)
                    setError(true)
                }
            },2000)   
        },[])
    
        const saveItem = (newItem) => {
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
        }
    
        return {item,saveItem,loading,error}
    }

    export default useLocalStorage
