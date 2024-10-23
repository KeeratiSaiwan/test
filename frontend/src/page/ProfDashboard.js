import './ProfDashboard.css';
import React, { useState } from "react";

export default function ProfDashboard(){
        const [requests, setRequests] = useState([
          //เปลี่ยนไส้
          {
            id: 1,
            date: "2024-10-21",
            title: "Request for Document A",
            fileName: "document_a.pdf",
            comment: "",
            choice: "",
          },
          {
            id: 2,
            date: "2024-10-20",
            title: "Request for Document B",
            fileName: "document_b.pdf",
            comment: "",
            choice: "",
          },
        ]);
      
        const handleChoiceChange = (id, choice) => {
          setRequests(
            requests.map((request) =>
              request.id === id ? { ...request, choice } : request
            )
          );
        };
      
        const handleCommentChange = (id, comment) => {
          setRequests(
            requests.map((request) =>
              request.id === id ? { ...request, comment } : request
            )
          );
        };
      
        const handleSubmit = (id) => {
          //เปลียนไส้
          const selectedRequest = requests.find((request) => request.id === id);
          console.log(`Request ID: ${id}`);
          console.log(`Choice: ${selectedRequest.choice}`);
          console.log(`Comment: ${selectedRequest.comment}`);
        };

    return(
        <div>
            <h1>PENDING REQUEST</h1>
            <h2>คำร้องรอการอนุมัติ</h2>
            //now call data yet.must call then map
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>File</th>
                        <th>Choices</th>
                        <th>Comment</th>
                        <th>Submit</th>
                    </tr>
                </thead>
                <tbody>
                  //เปลี่ยนmap
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td>{request.date}</td>
                            <td>{request.title}</td>
                            <td>
                                <label>
                                    <input
                                        type="radio"
                                        name={`choice-${request.id}`}
                                        value="Accept"
                                        onChange={() => handleChoiceChange(request.id, "Accept")}
                                    />
                                    Accept
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`choice-${request.id}`}
                                        value="Reject"
                                        onChange={() => handleChoiceChange(request.id, "Reject")}
                                    />
                                    Reject
                                </label>
                            </td>
                            <td>
              <button onClick={() => handleSubmit(request.id)}>Submit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <br></br>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Section</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tbody>
    </table>
    </div>
    );
}