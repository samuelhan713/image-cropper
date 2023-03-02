import { useState } from 'react';
import './RightTop.css';

const RightTop = () => {

    const [currGrade, setCurrGrade] = useState('');

    const elementary = [
        "1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2", "5-1", "5-2", "6-1", "6-2"
    ];

    const middle = [
        "1-1", "1-2", "2-1", "2-2", "3-1", "3-2"
    ];

    const high = [
        "수(상)", "수(하)", "수학 I", "수학 II", "확통", "미적분", "기하"
    ];

    const handleElementaryClick = () => {
        setCurrGrade('elementary');
    }
    const handleMiddleClick = () => {
        setCurrGrade('middle');
    }
    const handleHighClick = () => {
        setCurrGrade('high');
    }

    return (
        <div className="rightTop">
            <div className='rightTopContainer'>
                <div className='rightTop-left'>
                    <div className='grades' onClick={handleElementaryClick}>초</div>
                    <div className='grades' onClick={handleMiddleClick}>중</div>
                    <div className='grades' onClick={handleHighClick}>고</div>
                </div>
                <div className='rightTop-right'>
                    {currGrade == 'elementary' && elementary.map((i) => (
                        <div className='displayGrades'>{i}</div>
                    ))}
                    {currGrade == 'middle' && middle.map((i) => (
                        <div className='displayGrades'>{i}</div>
                    ))}
                    {currGrade == 'high' && high.map((i) => (
                        <div className='displayGrades'>{i}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightTop;