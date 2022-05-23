function Message(props) {
    const { mensajito } = props;

    return (
        <p className="message">
            {mensajito}
        </p>
    )
}

export default Message;