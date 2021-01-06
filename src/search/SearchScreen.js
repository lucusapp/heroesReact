import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../components/heros/HeroCard'
import { useForm } from '../hooks/useForm';
import { getHerosByName } from '../selectors/getHerosByName';


export const SearchScreen = ({history}) => {

    const location = useLocation ()
    console.log(location.search)
    const {q =''} =queryString.parse(location.search)
    console.log(q);

    const [formValues,handleInputChange]= useForm({
        searchText: q
    })
    
    const{searchText}= formValues

    const heroesFiltro=useMemo(() => getHerosByName(q), [q])


    const handelSubmit = (e)=>{
         e.preventDefault()
        history.push(`?q=${searchText}`)
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar un heroe</h4>
                    <hr />
                    <form onSubmit={handelSubmit}>
                        <input
                        type="text"
                        placeholder="Encontrar heroe"
                        className="form-control"
                        name="searchText"
                        value={searchText}
                        onChange={handleInputChange}
                        />
                    <button
                    type="submit"
                    className="btn m-1 btn-block btn-outline-primary">
                        Buscar
                    </button>
                </form>
                        </div>


                    <div className="col-7">
                        <h4>Results</h4>
                        <hr/>
                        {   
                            (q==='')
                            &&
                            <div className ="alert alert-info">
                                Buscando un heroe
                            </div>
                        }
                        {   
                            (q!=='' && heroesFiltro.length===0)
                            &&
                            <div className ="alert alert-danger">
                                No hay un heroe con {q}
                            </div>
                        }
                      

                        {

                            heroesFiltro.map(hero=>(
                                <HeroCard 
                                key={hero.id}
                                {...hero}
                                   
                                />
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}
