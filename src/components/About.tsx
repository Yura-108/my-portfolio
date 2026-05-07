import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative w-full container mx-auto
                    min-h-90 md:min-h-72.5 lg:min-h-130
                    flex flex-col items-center md:gap-12 lg:gap-10
                    md:flex-row md:items-end md:justify-between
                    mt-13
                    ">

      {/* Текст */}
      <p className="
                    text-[18px] leading-tight mt-6
                    md:text-[24px] md:mt-0
                    lg:text-[40px]
                    xl:text-[45px]
                    text-center md:text-left order-2 md:order-1">
        Я веб-дизайнер, который не создает дизайн ради дизайна, а анализирует и
        работает над удобством пользователя и решением вашей задачи.
      </p>

      {/* Фото с рамкой */}
      <div className="relative
      lg:w-103 lg:h-128 md:w-58 md:h-73 w-48 h-63
      order-1 md:order-2 shrink-0">

        {/* Цветная подложка (рамка) */}
        <motion.div
          initial={{ x: -20, y: 20, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-100 lg:h-125 md:w-55 md:h-70 w-45 h-60
                   bg-brand absolute
                     left-1/2 top-1/2 -translate-x-[calc(50%-0.75rem)] -translate-y-[calc(50%+0.75rem)]
                     md:left-3 md:top-auto md:bottom-3 md:translate-x-0 md:translate-y-0"
        />

        {/* Фото */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="lg:w-100 lg:h-125 md:w-55 md:h-70 w-45 h-60
            absolute overflow-hidden shadow-xl
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            md:left-0 md:top-auto md:bottom-0 md:translate-x-0 md:translate-y-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}dashulik.png`}
            alt="my photo"
            className="lg:w-100 lg:h-125 md:w-55 md:h-70 w-45 h-60 object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}