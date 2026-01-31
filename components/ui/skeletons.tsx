"use client";

export function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`py-20 lg:py-32 animate-pulse ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 w-48 bg-secondary rounded-lg mx-auto mb-4" />
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </div>
        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-secondary rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="py-20 lg:py-32 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-10 w-56 bg-secondary rounded-lg mx-auto mb-4" />
          <div className="w-20 h-1 bg-secondary mx-auto mb-4" />
          <div className="h-5 w-80 bg-secondary rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 h-[22rem] bg-secondary rounded-xl" />
          <div className="h-[22rem] bg-secondary rounded-xl" />
          <div className="h-[22rem] bg-secondary rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div className="py-20 lg:py-32 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-10 w-48 bg-secondary rounded-lg mx-auto mb-4" />
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="h-20 bg-secondary rounded-lg" />
            <div className="h-20 bg-secondary rounded-lg" />
            <div className="h-20 bg-secondary rounded-lg" />
          </div>
          <div className="h-80 bg-secondary rounded-xl" />
        </div>
      </div>
    </div>
  );
}
