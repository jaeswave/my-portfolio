export default function Notfound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
      <div>
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-6xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6 text-gray-600">
          Oops! You got lost!
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
