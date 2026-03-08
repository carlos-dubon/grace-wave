export const OnAir = () => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-red-600/20 px-3 py-1.5 w-fit">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
      </span>
      <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
        On air
      </span>
    </div>
  );
};
