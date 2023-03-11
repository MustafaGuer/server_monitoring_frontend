import { Result } from "../interfaces/Result";

const Server = (props: Result) => {
  const date = new Date(props.timestamp);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  let hours = ("0" + (date.getHours() + 1)).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  if (hours === "24") hours = "00";

  return (
    <tr>
      <td>
        <time>
          {day}.{month}.{year}
        </time>
      </td>
      <td>
        <time>
          {hours}:{minutes}:{seconds}
        </time>
      </td>
      <td>{props.serverName}</td>
      <td>{props.result}</td>
    </tr>
  );
};

export default Server;