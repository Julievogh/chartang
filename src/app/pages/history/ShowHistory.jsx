"use client";
function ShowHistory() {
  let data = JSON.parse(localStorage.getItem("urls")) || [];

  if (data.length > 10) {
    data = data.slice(data.length - 10);
  }

  const kunEnVersion = [...new Set(data)];
  return (
    <ul>
      {kunEnVersion.map((url, index) => {
        return (
          <li key={index}>
            <a href={`/pages/result?url=${encodeURIComponent(url)}`}>{url}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default ShowHistory;
