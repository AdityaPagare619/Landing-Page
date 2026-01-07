import { motion } from 'framer-motion';
import MobileCta from './MobileCta';
import MobileCommunity from './MobileCommunity';
import MobileAscension from './MobileAscension';
import MobileDailyFlow from './MobileDailyFlow';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const LandingPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <MobileCta />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <MobileCommunity />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <MobileAscension />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <MobileDailyFlow />
      </motion.div>
    </div>
  );
};

export default LandingPage;
