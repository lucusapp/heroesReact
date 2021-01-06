import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'
import { DcScreen } from '../components/dcScreen/DcScreen'
import { HeroScreen } from '../components/heros/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/navbar'
import { SearchScreen } from '../search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path ="/marvel" component={MarvelScreen} />
                    <Route exact path ="/hero/:heroeId" component={HeroScreen} />
                    <Route exact path ="/dc" component={DcScreen} />
                    <Route exact path ="/search" component={SearchScreen} />

                    <Redirect to ="/dc" />

                </Switch>
            </div>
        </>
    )
}
