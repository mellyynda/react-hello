import './index.css';

function HelloWorld (props) {
    console.log(props); 
    return (
        <div>
            <h1>Look {props.HWname}, my very first component, yeah!</h1>
            <p>{props.HWprofession}</p>
        </div>
    )
}

export default HelloWorld;