function Timestamp(props) {
    const { fecha } = props;

    return (
        <span className="timestamp">
            {fecha}
        </span> 
    )

}

export default Timestamp;