import React from 'react';
import AIGarden from './landing/AIGarden';
import OptimizedDay from './landing/OptimizedDay';
import EnchantedForest from './landing/EnchantedForest';
import TimelineBiome from './landing/TimelineBiome';
import AscensionComplete from './landing/AscensionComplete';
import Timeline from './landing/Timeline';
import InitiationPortal from './landing/InitiationPortal';

const LandingPage = () => {
  return (
    <div>
      <AIGarden />
      <OptimizedDay />
      <EnchantedForest />
      <TimelineBiome />
      <AscensionComplete />
      <Timeline />
      <InitiationPortal />
    </div>
  );
};

export default LandingPage;
