import React,{useState} from 'react'

const Search = ({setSearchFinal}) => {
    const [search,setSearch]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearchFinal(search)
        setSearch("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search.."/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search
