import clsx from 'clsx';
import css from '../FriendListItem/FriendListItem.module.css';


export default function FriendListItem({ friends: {
    avatar,
    name,
    isOnline,
} }) {
    const userStatus = clsx(css.userStatus, isOnline?css.userOnline: css.userOffline)
    return (
        <div className={css.card}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.userName}>{name}</p>
            <p className={userStatus}>{ isOnline? "Online": "Ofline"}</p>
</div>
    )
}