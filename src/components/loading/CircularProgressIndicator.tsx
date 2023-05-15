const CircularProgressIndicator = () => {
  return (
    <div className='flex justify-center items-center'>
      <div
        className={`
        rounded-full w-20 h-20 border-8 
        border-indigo-500 border-b-white animate-spin ease-out`}
      ></div>
    </div>
  );
};

export default CircularProgressIndicator;
