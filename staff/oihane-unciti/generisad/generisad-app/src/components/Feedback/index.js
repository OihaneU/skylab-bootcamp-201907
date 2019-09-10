


function Feedback({ message}) { 
    return <p className={`feedback feedback--${level? level : 'error'}`}>{message}</p>
}