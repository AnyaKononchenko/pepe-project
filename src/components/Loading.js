
const Loading = ({logo, title="Loading.."}) => {
    return ( 
        <section className="loading flex-centered">
            <img src={logo} alt="loading logo" />
            <p className="blink-1">{title}</p>
        </section>
     );
}
 
export default Loading;