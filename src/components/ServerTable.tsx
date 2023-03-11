import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const ServerTable = (props: {
  children:
    // | string
    // | number
    // | boolean
    // | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    // | ReactPortal
    // | null
    // | undefined;
}) => {
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
