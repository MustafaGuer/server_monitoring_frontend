import { ReactFragment } from "react";

const ServerTable = (props: { children: ReactFragment }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Response Date</th>
          <th>Response Time</th>
          <th>Server Name</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default ServerTable;
