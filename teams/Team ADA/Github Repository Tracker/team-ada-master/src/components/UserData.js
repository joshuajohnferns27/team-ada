import React, { useEffect, useState } from "react";

function UserData() {
  const [record, setRecord] = useState([]);
  const getData = () => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((res) => setRecord(res));
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Repo Url</th>
          </tr>
        </thead>
        <tbody>
          {record.map((output) => (
            <tr>
              <td>{output.login}</td>
              <td>{output.repos_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserData;
