import './leftfixedpanel.scss';
import TopParagrah from '../TopParagraph/TopParagraph';
import { forwardRef } from 'react';

const LeftFixedPanel = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="panel-container">
      <TopParagrah />
    </div>
  );
});

export default LeftFixedPanel;