import React from 'react'

import "./SettingsButton.css";

export const SettingsButton = ({action = () => {}}) => {
    return (
        <button 
        onClick={action}
        className='settings-button'>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1249 20.7812C14.0951 20.781 15.0377 21.1032 15.8047 21.6972C16.5718 22.2911 17.1196 23.1232 17.3621 24.0625H29.5312C29.8045 24.062 30.0681 24.1638 30.2701 24.348C30.4721 24.5321 30.5978 24.7852 30.6225 25.0574C30.6472 25.3296 30.5691 25.6012 30.4035 25.8187C30.238 26.0362 29.997 26.1838 29.7281 26.2325L29.5312 26.25L17.3621 26.2522C17.1204 27.1923 16.5729 28.0253 15.8058 28.6201C15.0387 29.2149 14.0956 29.5378 13.1249 29.5378C12.1543 29.5378 11.2111 29.2149 10.4441 28.6201C9.67696 28.0253 9.12947 27.1923 8.88775 26.2522L5.46869 26.25C5.19537 26.2505 4.93177 26.1487 4.72979 25.9645C4.52781 25.7804 4.4021 25.5273 4.3774 25.2551C4.35271 24.9829 4.43082 24.7113 4.59636 24.4938C4.7619 24.2763 5.00287 24.1287 5.27182 24.08L5.46869 24.0625H8.88775C9.13028 23.1232 9.67812 22.2911 10.4451 21.6972C11.2122 21.1032 12.1548 20.781 13.1249 20.7812ZM21.8749 5.46875C22.845 5.4685 23.7877 5.7907 24.5547 6.38467C25.3218 6.97864 25.8696 7.8107 26.1121 8.75H29.5312C29.8045 8.7495 30.0681 8.85135 30.2701 9.03549C30.4721 9.21963 30.5978 9.47272 30.6225 9.74492C30.6472 10.0171 30.5691 10.2887 30.4035 10.5062C30.238 10.7237 29.997 10.8713 29.7281 10.92L29.5312 10.9375L26.1121 10.9397C25.8704 11.8798 25.3229 12.7128 24.5558 13.3076C23.7887 13.9024 22.8456 14.2253 21.8749 14.2253C20.9043 14.2253 19.9611 13.9024 19.1941 13.3076C18.427 12.7128 17.8795 11.8798 17.6378 10.9397L5.46869 10.9375C5.19537 10.938 4.93177 10.8362 4.72979 10.652C4.52781 10.4679 4.4021 10.2148 4.3774 9.94258C4.35271 9.67038 4.43082 9.39879 4.59636 9.18131C4.7619 8.96382 5.00287 8.81619 5.27182 8.7675L5.46869 8.75H17.6378C17.8803 7.8107 18.4281 6.97864 19.1951 6.38467C19.9622 5.7907 20.9048 5.4685 21.8749 5.46875Z" fill="#F8F8F8"/>
            </svg>
        </button>
    )
}
