
import React from 'react'
import './Programs.css'
import Program_1 from "../../assets/program-1.png"
import Program_2 from "../../assets/program-2.png"
import Program_3 from "../../assets/program-3.png"
import Program_icon_1 from "../../assets/program-icon-1.png"
import Program_icon_2 from "../../assets/program-icon-2.png"
import Program_icon_3 from "../../assets/program-icon-3.png"

const Programs = () => {
    return (
        <div className='program-container'>
            <div className='program-container2'>
                <div className='program'>
                    <img src={Program_1} alt="program_1" />
                    <div className='caption'>
                        <img src={Program_icon_1} alt="as" />
                        <h3>Graducation Degree</h3>
                    </div>
                </div>
                <div className='program'>
                    <img src={Program_2} alt="program_2" />
                    <div className='caption'>
                        <img src={Program_icon_2} alt="as" />
                        <h3>Master Degree</h3>
                    </div>
                </div>
                <div className='program'>
                    <img src={Program_3} alt="program_3" />
                    <div className='caption'>
                        <img src={Program_icon_3} alt="as" />
                        <h3>Post Degree</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs
