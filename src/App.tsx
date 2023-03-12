import { useState, useEffect, useCallback } from "react";
import "./App.css";
import ServerTable from "./components/ServerTable";
import Server from "./components/ServerRow";
import { Result } from "./interfaces/Result";

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServerData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/check");
      const data = await response.json();

      setResults(data);
    } catch (error) {
      throw new Error("Something went wrong :(");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchServerData();
    const checkInterval = setInterval(() => fetchServerData(), 3000);

    return () => {
      clearInterval(checkInterval);
    };
  }, [fetchServerData]);

  return (
    <div className="App">
      <h1>Server Monitoring!</h1>

      {isLoading && <p>Loading...</p>}
      {results && !isLoading && (
        <ServerTable>
          {results &&
            results.map((result: Result) => (
              <Server
                key={result.serverName}
                serverName={result.serverName}
                result={result.result}
                timestamp={result.timestamp}
              />
            ))}
        </ServerTable>
      )}
    </div>
  );
}

export default App;
