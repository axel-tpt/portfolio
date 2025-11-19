export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-[#D73F74] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-1/4 w-96 h-96 bg-[#FFCC63] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-1/4 left-1/4 w-96 h-96 bg-[#843661] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      {/* Dark mode gradients */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-[#D73F74] rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-5 animate-blob dark:animate-blob-slow" />
      <div className="absolute top-0 -right-1/4 w-96 h-96 bg-[#FFCC63] rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000 dark:animate-blob-slow" />
      <div className="absolute -bottom-1/4 left-1/4 w-96 h-96 bg-[#843661] rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000 dark:animate-blob-slow" />
    </div>
  );
}


