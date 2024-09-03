import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
const styles = StyleSheet.create({
  courseList: {
    listStyleType: 'none',
    padding: '0',
    margin: '20px 0', 
  },
  courseItem: {
    padding: '10px 0',
    borderBottom: '1px solid #ccc', 
  },
});

export default CourseListRow;
   
   
   
   
   
   
   
   
   
   
   
   
   