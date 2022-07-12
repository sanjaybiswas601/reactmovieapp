import React,{ useContext,useEffect,useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=3d2b9c96`

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    const [loading,setLoading] = useState(true)
    const [movie,setMovie] = useState([])
    const [error,setError] = useState({show:"false", msg: ""})
    const [query,setQuery] = useState("titanic")
    const getMovies = async(url) =>{
        setLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response=== "True"){
                setLoading(false)
                setMovie(data.Search)
            }else{
                setError({
                    show: true,
                    msg: data.error
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`)
        },800)
        
        return() => clearTimeout(timerOut);

    }, [query])

    return <AppContext.Provider value={{ loading, error, movie, query, setQuery }}>{children}</AppContext.Provider>

}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext,AppProvider,useGlobalContext}