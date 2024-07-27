import css from "./Profile.module.css";

const Profile = ({
name, 
tag, 
location, 
image, 
stats,
}) => {
  return (
    <div className={css.contProfile}>

      <div className={css.listProfile}>
        <img className={css.imgProfile}
          src={image}
          alt="User avatar"
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      
      <div className={css.boxStatsList}>
        <ul className={css.flex}>
          <li className={css.flexItems}>
            <span className={css.list}>Followers</span>
            <span className={css.stats}>{stats.followers}</span>
          </li>
          <li className={css.flexItems}>
            <span className={css.list}>Views</span>
            <span className={css.stats}>{stats.views}</span>
          </li>
          <li className={css.flexItems}>
            <span className={css.list}>Likes</span>
            <span className={css.stats}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Profile