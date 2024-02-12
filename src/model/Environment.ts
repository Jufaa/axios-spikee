export const Environment = {
  MAIN_SERVICE: `http://${process.env.NEXT_PUBLIC_V2_MAIN_SERVICE_URL}`,
  ADS_SERVICE: `http://${process.env.NEXT_PUBLIC_V2_ADS_SERVICE_URL}`,
} as const;
