// client/src/components/common/ErrorMessage.jsx
export const ErrorMessage = ({ message, onRetry }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
    <p className="text-red-800 mb-2">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Try Again
      </button>
    )}
  </div>
);