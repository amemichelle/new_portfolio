import "./summaryitem.scss";

function SummaryItem(props) {
  return (
    <div className="item">
      <div className="item__title-box">
        <img src={props.icon} className="item__icon" />
        <p className="item__title">{props.title}</p>
      </div>

      <p className="item__desc">{props.desc}</p>
    </div>
  );
}

export default SummaryItem;
