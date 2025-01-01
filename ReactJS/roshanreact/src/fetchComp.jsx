import React, { useState, useEffect } from 'react';

const FetchComp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res = await response.json();
        setData(res);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-cyan-300 font-bold text-center">Loading...</p>;
  if (error) return <p className="text-red-500 font-bold text-center">Error: {error}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="p-6 rounded-lg shadow-neumorphic bg-gray-900">
        <h1 className="text-cyan-400 text-xl font-bold mb-4">User Data</h1>
        <table className="w-full text-left text-sm text-cyan-300">
          <thead>
            <tr className="border-b border-cyan-700">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Username</th>
              <th className="py-2 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-cyan-800 hover:text-black transition duration-300 ease-in-out"
                >
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchComp;
