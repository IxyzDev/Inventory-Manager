import ProtectedRoute from "@/components/ProtectedRoute";

const Home = () => {
  return (
    <section className="solid-bg text-center py-10">
      <h1 className="text-4xl font-bold mb-4">¡Hola mundo!</h1>
    </section>
  );
};

export default Home;

/*import ProtectedRoute from "@/components/ProtectedRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <section className="solid-bg text-center py-10">
        <h1 className="text-4xl font-bold mb-4">¡Hola mundo!</h1>
      </section>
    </ProtectedRoute>
  );
};

export default Home;
 */
