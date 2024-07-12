import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to SharE CarTriP</h1>
      <p>Start your journey with us.</p>
      <div className="mt-4 space-x-4">
        <Link to="/home" className="text-blue-500">Search Ride</Link>
      </div>
    </div>
  );
};

export default Index;