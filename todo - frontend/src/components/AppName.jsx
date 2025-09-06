import { Goal } from "lucide-react";

function AppName() {
  return (
    <div className="text-center py-8 rounded-3xl backdrop-blur-md">
      {/* Premium Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg flex items-center justify-center gap-3">
          <Goal className="w-8 h-8 text-purple-800 animate-pulse" />
          MY TODO LIST
          <Goal className="w-8 h-8 text-pink-800 animate-pulse" />
        </span>
      </h1>
    </div>
  );
}

export default AppName;
