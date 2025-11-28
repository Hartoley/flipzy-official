import { motion } from "framer-motion";

const PhoneStack = () => {
  return (
    <div className="relative w-full h-[140px] flex justify-center">
      {/* LEFT PHONE — BASIC */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 w-24 h-32 bg-[#1e1e20] rounded-2xl shadow-xl border border-black/10 overflow-hidden"
      >
        <div className="w-10 h-2 bg-black rounded-b-xl mx-auto mt-2" />
        <div className="p-2">
          <p className="text-gray-300 text-[10px]">Basic</p>
          <p className="text-white text-lg font-bold leading-4">0 UAH</p>
          <p className="text-gray-400 text-[8px] mt-1">Free transfers</p>
        </div>
      </motion.div>

      {/* MIDDLE PHONE — STANDARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="absolute w-28 h-36 bg-gradient-to-b from-orange-400 to-orange-600 
                   rounded-2xl shadow-2xl border border-black/10 overflow-hidden"
      >
        <div className="w-12 h-2 bg-black rounded-b-xl mx-auto mt-2" />
        <div className="p-2 text-white">
          <p className="text-[10px]">Standard</p>
          <p className="text-lg font-bold leading-4">99 UAH</p>
          <p className="text-[8px] mt-1">Unlimited payments</p>
        </div>
      </motion.div>

      {/* RIGHT PHONE — PREMIUM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute right-0 w-32 h-40 bg-[#0d1a38] rounded-2xl shadow-2xl 
                   border border-black/10 overflow-hidden"
      >
        <div className="w-14 h-3 bg-black rounded-b-xl mx-auto mt-2" />
        <div className="p-2 text-white">
          <p className="text-[10px]">Premium</p>
          <p className="text-xl font-bold leading-5">299 UAH/mo</p>
          <p className="text-[8px] mt-1">
            International transfers, 2% cashback
          </p>

          <button className="mt-2 bg-gray-300 text-black px-2 py-1 rounded-lg text-[8px] font-semibold">
            Unlock Premium
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneStack;
