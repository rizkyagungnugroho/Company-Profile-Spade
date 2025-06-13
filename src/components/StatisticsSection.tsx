import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { label: "Tahun Operasi", value: 4 },
  { label: "PC Gaming", value: 140 },
  { label: "Member Aktif", value: 1200 },
  { label: "Turnamen Diselenggarakan", value: 85 },
];

const StatisticsSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 text-center">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div key={index}>
            <AnimatedCounter
              target={item.value}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            />
            <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
