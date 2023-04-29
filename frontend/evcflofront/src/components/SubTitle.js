function SubTitle({ title, subTitle }) {
  return (
    <div className="section-title">
      <h3>
        {title} <span>{subTitle}</span>
      </h3>
    </div>
  );
}

export default SubTitle;
