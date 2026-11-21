// Backend centralized environment config (Phase 1)
export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development"
};
