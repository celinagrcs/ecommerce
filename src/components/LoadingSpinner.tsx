const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div 
        className="
          w-16 h-16 
          border-4 border-t-4 border-gray-200 
          border-t-[#ff8e3c] rounded-full 
          animate-spin
        "
        aria-label="Cargando contenido..."
      >
      </div>
      
    </div>
  );
};

export default LoadingSpinner;