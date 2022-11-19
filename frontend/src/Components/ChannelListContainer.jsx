import React from 'react'
import { CompanyHeader, SideBar } from './AppBar/SideBar'
import ChannelSearch from './ChannelSearch'



const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
            </div>
        </>
    )
}
export default ChannelListContainer