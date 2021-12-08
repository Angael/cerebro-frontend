export const transitionSpring = { type: 'spring', stiffness: 70, damping: 15 };

export const VARIANTS = {
  drawer: {
    collapsed: { opacity: 0 },
    open: { opacity: 1 },
  },
  drawerHeader: {
    collapsed: { opacity: 0, width: 0 },
    open: { opacity: 1, width: 'auto' },
  },
  collapseParent: {
    collapsed: { opacity: 0, height: 0, y: -24, scale: 0.8 },
    open: { opacity: 1, height: 'auto', y: 0, scale: 1 },
  },
};

export const TRANSITIONS = {
  drawer: { duration: 0.3, delay: 0.05 },
  drawerHeader: { delay: 0.6, duration: 0.45 },
};
