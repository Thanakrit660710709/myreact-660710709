import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://reg4.su.ac.th/regapiweb/api/th/Fileimg/Getstuimgurl/1R2nZ0nN7zmpf9VfPgF%3CPQ=="
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '70px',
            height: '75px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#667eea', margin: '10px 0' }}>
        ธนกฤต เวทยนุกูล 660710709
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักศึกษาศิลปากร คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;