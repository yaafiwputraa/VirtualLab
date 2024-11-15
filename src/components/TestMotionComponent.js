'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TestMotionComponent = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    Testing Motion
  </motion.div>
);

export default TestMotionComponent;
