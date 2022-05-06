import React from 'react'

const boardCreateComponent = (props) => {
  console.log(props);
  return (
    <>
        <h2>boardCreateComponent</h2>
        <div>
            <label htmlFor="title">제목</label>
            <input type="text" name="title" onChange={props.handleChange} />
        </div>
        <div>
            <label htmlFor="author">작성자</label>
            <input type="text" name="author" onChange={props.handleChange}/>
        </div>
        <div>
            <label htmlFor="content">내용</label>
            <input type="text" name="content" onChange={props.handleChange}/>
        </div>
        
    </>
    
  )
}
export default boardCreateComponent;