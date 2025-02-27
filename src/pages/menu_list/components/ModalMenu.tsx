import { Modal, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuModal({ isOpen, setIsOpen, selectedItem }: any) {
  return (
    <AnimatePresence>
      {isOpen && selectedItem && (
        <Modal
          open={isOpen}
          onCancel={() => setIsOpen(false)}
          footer={null}
          centered
          width={350}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
          >
            <h2 className="text-lg font-semibold">{selectedItem.name}</h2>
            <p className="mt-2">{selectedItem.taste}</p>
            <p className="mt-2 text-gray-500">{selectedItem.origin}</p>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
