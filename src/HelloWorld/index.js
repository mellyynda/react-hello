import './index.css';

function HelloWorld (props) {
    console.log(props); 
    return (
        <div>
            <h1>Look {props.name}, my very first component, yeah!</h1>
            <p>Monday at last!</p>
        </div>
    )
}

export default HelloWorld;