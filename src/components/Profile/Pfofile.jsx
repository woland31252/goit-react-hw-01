import clsx from 'clsx'
import css from "./Profile.module.css";
  
const nameTile = clsx(css.item, css.name)

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
                <p className={nameTile}>{name}</p>
                <p className={css.item}>{tag}</p>
                <p className={css.item}>{location}</p>
            </div>
            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span className={css.statsText}>Followers</span>
                    <span className={css.statsText}>{followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsText}>Views</span>
                    <span className={css.statsText}>{views}</span>
                </li>
                <li className={css.statsItem}>
                   <span className={css.statsText}>Likes</span> 
                    <span className={css.statsText}>{likes}</span> 
                </li>
            </ul>
        </div>
    )
}