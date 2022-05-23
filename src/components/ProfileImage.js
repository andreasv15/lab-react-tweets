

function ProfileImage(props) {
    const { imagenPerfil } = props;

    return (
        <>
            <img className="profile" src={imagenPerfil} alt="imagen" width="50px" />
        </>
    )
}


export default ProfileImage;