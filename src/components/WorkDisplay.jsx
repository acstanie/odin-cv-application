import '../styles/WorkDisplay.css'

export default function WorkDisplay(props) {
    return (
        <div className="work">
            <h2>Practical Experience</h2>
            <hr />
            <h3>{ props.workInfo.company }</h3>
            <p>{ props.workInfo.startDate } to { props.workInfo.endDate }</p>
            <h4>{ props.workInfo.position }</h4>
            <p>{ props.workInfo.duty }</p>
        </div>
    );
}