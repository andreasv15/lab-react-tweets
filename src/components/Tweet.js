import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  //console.log(props);
  // const { message, timestamp, user } = props.tweet // tweet es el nombre de la "propiedad" que tenemos en la App.js (<Tweet tweet={ tweetsArray[0] } />)
  // console.log(message)
  // console.log(timestamp)
  // console.log(user.name)

  return (
    <div className="tweet">
      {/* <img src={user.image} className="profile" alt="profile" /> */}
      <ProfileImage imagenPerfil={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
                <span className="name">{user.name}</span>
                <span className="handle">@{user.handle}</span>
                <span className="timestamp">{timestamp}</span>
          </span> */}

          <User datosUser={props.tweet.user} /> 
          <Timestamp fecha={props.tweet.timestamp} />

        </div>

        {/* <p className="message">
          {message}

        </p> */}
        <Message mensajito={props.tweet.message} />

        {/* Font Awesome icons */}
        {/* <div className="actions">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div> */}

        <Actions />



      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
