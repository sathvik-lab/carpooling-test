import Image from 'next/image'
import { BsPerson } from 'react-icons/bs'

const style = {
    wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    rightMenu: `flex gap-3 items-center`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
    loginButton: `flex item-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
    loginText: `ml-3`,
}

const currentAccount = '0xc5C639B4499820395c473F5B148BC215aCAB0511'

const Navbar = () => {
    return ( 
    <div className={style.wrapper}>
        <div className={style.leftMenu}>
            <div className={style.logo}>CarPool</div>
            <div className={style.menuItem}>Ride</div>
            <div className={style.menuItem}>Drive</div>
            <div className={style.menuItem}>More</div>
        </div>
        <div className={style.rightMenu}>
            <div className={style.menuItem}>Help</div>
            <div className={style.menuItem}>Bro</div>
            <div className={style.userImageContainer}>
                <Image 
                className={style.userImage}
                src="data:image/jpeg;base64,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"
                alt="avatar"
                width={40}
                height={40}
                />
            </div>
            {currentAccount ? (
            <div>
                {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
            </div>
            ) : (
                <div className={style.loginButton}>
                    <BsPerson />
                    <div className={style.loginText}>Log in</div>
                </div>
            )}
        </div>
    </div>
    )
}

export default Navbar