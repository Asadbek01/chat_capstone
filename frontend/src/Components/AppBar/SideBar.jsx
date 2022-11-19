import React from "react"
// import { ChannelList, useChatContext } from "stream-chat-react"
import Cookies from "universal-cookie"
// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./"
import HospitalIcon from '../../assets/hospital.png'
import LogoutIcon from "../../assets/logout.png"

export const SideBar = () => {
    return (

        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={HospitalIcon} alt='Hospital' width='30' />

                </div>
            </div>
            <div className='channel-list__sidebar__icon2'>
                <div className='icon1__inner'>
                    <img src={LogoutIcon} alt='Logout' width='30' />
                </div>
            </div>
        </div>
    )
}

export const CompanyHeader = () => {
    return (
        <div className='channel-list__header'>
            <p className='channel-list__header__text'>Chat</p>
        </div>
    )
}
