import React, { useState } from 'react';
import './ReqCSS/DefaultRequest.css'
import NavbarReq from '../../components/NavbarReq';

export default function DefaultRequest()  {
  
  const [formData, setFormData] = useState({
    semester_year: '',
    reqTitle: '',
    reqContent: '',
    section: '',
    semester: '',
    teacher: '',
    course_number: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='whole-page'>
      <NavbarReq/>
      <div className="form-container">
        <h1>คำร้องทั่วไป</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
              <label htmlFor="semesterYear">ปีการศึกษา</label>
            <input
              type="text"
              name="semester_year"
              id="semesterYear"
             placeholder="user input here..."
              value={formData.semester_year}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="semester">ภาคการศึกษา</label>
            <select
              name="semester"
              id="semester"
              value={formData.semester}
              onChange={handleChange}
            >
              <option value="">user choose semester here</option>
             <option value="Option 1A">Option 1A</option>
             <option value="Option 1B">Option 1B</option>
            </select>
          </div>

          <div className="input-group">
           <label htmlFor="reqTitle">หัวข้อคำร้อง</label>
            <input
             type="text"
              name="reqTitle"
              id="reqTitle"
              placeholder="user input here..."
              value={formData.reqTitle}
              onChange={handleChange}
           />
         </div>

        <div className="input-group">
          <label htmlFor="reqContent">ความประสงค์(ระบุเหตุผลประกอบ)</label>
          <textarea
            type="text"
            name="reqContent"
            id="reqContent"
            className="large-input"
            placeholder="user input here..."
            value={formData.reqContent}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="teacher">อาจารย์ผู้สอน</label>
          <select
            name="teacher"
            id="teacher"
            value={formData.teacher}
            onChange={handleChange}
          >
            <option value="">user choose teacher here...</option>
            <option value="somchai">สมชาย</option>
            <option value="somying">สมหญิง</option>
            <option value="art">อาร์ต</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="courseNumber">รหัสวิชา</label>
          <select
            name="course_number"
            id="courseNumber"
            value={formData.course_number}
            onChange={handleChange}
          >
            <option value="">user choose course number here...</option>
            <option value="Option 3A">Option 3A</option>
            <option value="Option 3B">Option 3B</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="section">เซคชั้นที่ศึกษา</label>
          <input
            type="text"
            name="section"
            id="section"
            placeholder="user input here..."
            value={formData.section}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="fileUpload">ไฟล์แนบ</label>
          <input
            type="file"
            name="file"
            id="fileUpload"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
}
