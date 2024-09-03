import React from 'react';
import PropTypes from 'prop-types';
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const row= { backgroundColor: '#f5f5f5ab' };
    const header = { backgroundColor: '#deb5b545' };
}
return<tr style={isHeader ? header : row}>
{isHeader ? (
  textSecondCell === null ? (
    <th colSpan="2">{textFirstCell}</th>
  ) : (
    <>
      <th>{textFirstCell}</th>
      <th>{textSecondCell}</th>
    </>
  )
) : (
  <>
    <td>{textFirstCell}</td>
    <td>{textSecondCell}</td>
  </>
)}
</tr>
export default CourseListRow;
   
   
   
   
   
   
   
   
   
   
   
   
   