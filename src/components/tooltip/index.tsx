export default function Tooltip({ message, children, className }) {
  return (
    <div className="group relative flex">
      {children}
      <span
        className={
          className == "badge"
            ? "absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white font-medium group-hover:scale-100 whitespace-nowrap z-10"
            : "absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white font-medium group-hover:scale-100 wrap min-w-[250px] z-10"
        }
      >
        {message}
      </span>
    </div>
  );
}
