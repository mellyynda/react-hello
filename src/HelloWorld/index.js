import './index.css';

function HelloWorld ({HWname, HWprofession}) {
    
    return (<>
        <div>
            <h1>Look {HWname}, my very first component, yeah!</h1>
            <p>{HWprofession}</p>
        </div>
        </>
    )
}

export default HelloWorld;