import { useEffect, useState} from "react";

function UserProfile({ userId}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchUser() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch (
                    `https://jsonplaceholder.typicode.com/users/${userId}`,
                    { signal: controller.signal}
                );

                if (!response.ok) {
                    throw new Error('Failed to load user');
                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchUser();

        // abort request if component unmounts or userId changes
        return () => controller.abort();
    }, [userId]) // userId in dependency array to refetch data on change

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: [error} </p>;
    if (!user) return null;

    return (
         <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
    );
}

function App() {
    const [userId, setUserId] = useState(1);

    return (
        <div>
            <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      <UserProfile userId={userId} />
        </div>
    );
}

export default App;