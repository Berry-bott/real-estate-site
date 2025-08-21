import  message from "../assets/messages-3.svg";

const cards = [
  {
    title: "MOST CLICKED",
    subtitle: "Urban Prime Plaza Premiere",
    count: 204,
    dots: 2,
    totalDots: 3,
    icon: null,
  },
  {
    title: "MOST WATCHLISTED",
    subtitle: "Urban Prime Plaza Premiere",
    count: null,
    dots: 3,
    totalDots: 5,
    icon: null,
  },
  {
    title: "HOTTEST LISTING",
    subtitle: "Urban Prime Plaza Premiere",
    count: null,
    dots: 1,
    totalDots: 5,
    icon: (
      <div className="absolute top-4 right-4 bg-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg">
       <img src={message} alt="" />
      </div>
    ),
  },
];

const DotIndicator = ({ active, keyProp }) => (
  <span
    key={keyProp}
    className={`inline-block w-2 h-2 rounded-full mx-0.5 ${
      active ? "bg-white" : "bg-gray-300"
    }`}
  />
);

const FooterShowcase = () => (
  <footer className="w-full bg-transparent px-2 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative w-full sm:w-auto max-w-none sm:max-w-[360px] md:max-w-[420px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] rounded-xl overflow-hidden shadow bg-gradient-to-b from-gray-100 to-gray-200"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
          {/* Optional icon */}
          {card.icon}
          {/* Content */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="text-[10px] sm:text-xs text-white font-semibold opacity-90 mb-1 tracking-wide">
              {card.title}
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow">
                {card.subtitle}
              </div>
              {card.count && (
                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-black drop-shadow">
                  {card.count}
                </div>
              )}
            </div>
            {/* Dots */}
            <div className="mt-3 sm:mt-4 flex items-center">
              {Array.from({ length: card.totalDots }).map((_, i) => (
                <DotIndicator keyProp={i} active={i === card.dots} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </footer>
);

export default FooterShowcase;