import { withPigment } from '@pigment-css/nextjs-plugin';
import { createTheme } from '@mui/material';

/** @type {import('next').NextConfig} */
const nextConfig = {
  //
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: createTheme({ typography: { fontFamily: 'var(--my-font-family)' } }),
};

export default withPigment(nextConfig, pigmentConfig);
