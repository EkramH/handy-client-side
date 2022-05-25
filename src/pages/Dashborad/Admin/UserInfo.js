import React from 'react';

const UserInfo = ({user, index}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{user.name || <p>User</p>}</td>
        <td>{user.email}</td>
        <td><button className="btn btn-xs text-sm">Make Admin</button></td>
        <td><button className="btn btn-xs text-sm">Remove User</button></td>
      </tr>
    );
};

export default UserInfo;