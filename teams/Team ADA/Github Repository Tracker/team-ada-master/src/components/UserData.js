import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserData.css";
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
    <div className="grid_table">
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
              <td>
                <Link>{output.repos_url}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserData;
