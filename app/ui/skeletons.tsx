export default function ProjectsSkeleton() {
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
  