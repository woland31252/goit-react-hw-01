import css from "./Profile.module.css";

export default function Profile({
    name,
    tag,
    location,
    image,
    stats: {
            followers,
            views,
            likes
           }
}) {
    return (
        <div className={css.container}>
            <div className={css.card}>
                <img className={css.image} src={image} alt="avatar" />
                <p className={css.item}>{name}</p>
                <p className={css.item}>{tag}</p>
                <p className={css.item}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li className={css.statsItem}>
                   <span>Likes</span> 
                    <span>{likes}</span> 
                </li>
            </ul>
        </div>
    )
}