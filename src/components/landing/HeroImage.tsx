
const HeroImage = () => {
  return (
    <div className="rounded-lg shadow-xl bg-white border border-slate-200 overflow-hidden">
      <div className="p-2">
        <div className="flex items-center gap-1.5 pb-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="aspect-[4/3] bg-slate-50 rounded border border-slate-200 overflow-hidden">
          <div className="h-10 bg-blue-600 flex items-center px-3">
            <div className="h-3 w-32 rounded-full bg-white opacity-50" />
          </div>
          <div className="p-3">
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-1">
                <div className="bg-white shadow-sm border border-slate-200 rounded-md p-3 h-full">
                  <div className="h-3 w-12 bg-slate-200 rounded-full mb-2" />
                  <div className="h-3 w-full bg-slate-200 rounded-full mb-2" />
                  <div className="h-3 w-1/2 bg-slate-200 rounded-full" />
                </div>
              </div>
              <div className="col-span-3">
                <div className="bg-white shadow-sm border border-slate-200 rounded-md p-3">
                  <div className="flex justify-between mb-4">
                    <div className="h-3 w-20 bg-slate-200 rounded-full"></div>
                    <div className="h-3 w-20 bg-blue-200 rounded-full"></div>
                  </div>
                  <div className="h-24 bg-blue-100 rounded-md flex items-center justify-center">
                    <div className="h-12 w-full max-w-[80%] bg-blue-50 rounded-md border border-blue-200"></div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 bg-slate-200 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 bg-white shadow-sm border border-slate-200 rounded-md p-3">
              <div className="flex justify-between items-center mb-3">
                <div className="h-3 w-24 bg-slate-200 rounded-full"></div>
                <div className="h-6 w-16 bg-blue-500 rounded"></div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 bg-slate-100 rounded border border-slate-200"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
