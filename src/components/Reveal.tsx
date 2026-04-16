import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Начальное состояние: прозрачный и ниже на 50px
      whileInView={{ opacity: 1, y: 0 }} // Состояние при появлении в области видимости
      viewport={{ once: true, margin: "-100px" }} // Анимация сработает один раз, когда элемент в 100px от края
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Плавный "премиальный" выезд
      }}
    >
      {children}
    </motion.div>
  );
};