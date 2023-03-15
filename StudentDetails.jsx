import React from 'react'

const StudentDetails = (props) => {
    let data=props.data
  return (
    <div>
        <table border={"2px"} style={{fontFamily:"initial",fontSize:"30px",textAlign:"center"}}>
            <tr>
            <th>SL NO</th>
            <th>StudentName</th>
            <th>StudentID</th>
            <th>Address</th>
            <th>Age</th>
            <th>Subjects</th>
            <th>YOP</th>
            <th>Photo</th>
            </tr>
            
                {data.map((x)=>{
                    return <tr>
                        <td>{x.slno}</td>
                        <td>{x.studentName}</td>
                        <td>{x.studentID}</td>
                        <td>{x.address}</td>
                        <td>{x.age}</td>
                        <td><ol>{x.subjects.map((x)=>{
                            return <li>{x}</li>
                        })}</ol></td>
                        <td>{x.yop}</td>
                        <td><img src={x.photo} alt="" style={{height:"150px",width:"200px"}}/></td>
                    </tr> 
                })}
            
        </table>
    </div>
  )
}

export default StudentDetails