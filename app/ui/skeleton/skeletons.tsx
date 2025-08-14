function ProjectsSkeletons() {
  return (
    <section className="py-24">
      <div className="w-[70%] m-auto">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-40 bg-gray-200 animate-pulse rounded-md" />
          <div className="w-[45%] h-4 bg-gray-200 animate-pulse rounded-md" />
        </div>

        {/* Grid of skeleton cards */}
        <div className="grid grid-cols-4 gap-14 mt-14">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg">
              {/* Image skeleton */}
              <div className="h-[90px] w-[285px] bg-gray-200 animate-pulse rounded-md" />

              {/* Text and button skeleton */}
              <div className="mt-2.5 space-y-2.5">
                <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-md" />
                <div className="h-3 w-full bg-gray-100 animate-pulse rounded-md" />
                <div className="h-3 w-[60%] bg-gray-100 animate-pulse rounded-md" />
                <div className="h-8 w-24 bg-gray-300 animate-pulse rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientSkeleton() {
  return (
    <section className="flex flex-wrap gap-3 items-center justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-300 animate-pulse rounded"
          style={{ width: 125, height: 20 }}
        />
      ))}
    </section>
  );
}

function SkillSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 p-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-gray-200 animate-pulse rounded py-3">
          <div className="h-10 w-10 p-2 bg-gray-300 animate-pulse rounded-full mx-auto"></div>
          <div className="mt-6 space-y-2">
            <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto"></div>
            <div className="h-12 w-11/12 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-14">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-gray-200 animate-pulse rounded mx-auto">
          <div
            className="bg-gray-300 animate-pulse rounded w-full"
            style={{ width: 285, height: 175 }}
          ></div>
          <div className="mt-3 space-y-3">
            <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto mb-1.5"></div>
            <div className="h-6 w-1/1 bg-gray-300 rounded mx-auto mb-2.5"></div>
            <div className="h-7 w-20 bg-gray-300 rounded-md "></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PostsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="relative bg-gray-200 animate-pulse rounded-lg p-6"
        >
          <div className="bg-gray-300 animate-pulse w-[180px] h-[100px] rounded-sm"></div>
          <div className="grid gap-3 mt-5">
            <div className="h-4 w-3/4 bg-gray-300 animate-pulse"></div>
            <div className="h-2 w-16 bg-gray-300 animate-pulse"></div>
            <div className="h-12 w-11/12 bg-gray-300 animate-pulse"></div>
            <div className="absolute top-1 right-1 h-3 w-12 bg-gray-300 animate-pulse"></div>
          </div>
          <div className="flex flex-col items-start gap-1 justify-center mt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <div className="h-3 w-20 bg-gray-300 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { ProjectsSkeleton, ClientSkeleton, SkillSkeleton, PostsSkeleton };
