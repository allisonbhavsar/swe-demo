const Profile = ({name, title, imgSrc}) => {
    return (
        <div id="officerProfile">
            <img id="officerImg" src={imgSrc} alt={title}/>
            <h4 id="profileLabel">{name}</h4>
            <h6 id="profileLabel">{title}</h6>
        </div>
    )
}

export default Profile;