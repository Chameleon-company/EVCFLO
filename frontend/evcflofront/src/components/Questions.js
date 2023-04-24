import Title from "./Title";
import useCollapse from 'react-collapsed';

const Questions = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <section className="Questions" id="faq">
      <Title title="Frequently Asked Questions" />
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
              Now you can see the hidden content. <br/><br/>
              Click again to hide...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

{/*
<div className="section-center about-center">
          <p>
            <h3>What is Chameleon?</h3>
            
          </p>
          <p>
            <h3>What is Chameleon's mission?</h3>
            Chameleon's mission is to improve everyday lives by 
            researching, creating, testing, documenting and deploying IoT-based solutions.
            This will allow us to build smarter cities, homes, transportation and energy management systems. ​
          </p>
      </div>
*/}