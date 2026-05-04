export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="animate-spin h-10 w-10 border-4 border-white border-t-transparent rounded-full" />
    </div>
  );
}