import css from "./Profile.module.css";

const Profile = ({
name, 
tag, 
location, 
image, 
stats,
}) => {
  return (
    <div className={CSS.contProfile}>

  <div>
    <img className={CSS.imgProfile}
      src={image}
      alt="User avatar"
    />
        <p className={CSS.name}>{name}</p>
        <p className= {CSS.tag}>{tag}</p>
    <p className={CSS.location}>{location}</p>
  </div>

  <ul className={CSS.flex}>
    <li className={CSS.flexItems}>
          <span className={CSS.list}>Followers</span>
          <span className={CSS.stats}>{stats.followers}</span>
    </li>
    <li>
      <span className={CSS.list}>Views</span>
      <span className={CSS.stats}>{stats.views}</span>
    </li>
    <li>
      <span className={CSS.list}>Likes</span>
      <span className={CSS.stats}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile