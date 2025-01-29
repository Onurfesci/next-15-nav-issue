const getEnv = (): 'prod' | 'uat' | 'development' => {
  let env = process.env.SYSTEM_ENVIRONMENT || process.env.NEXT_PUBLIC_STAGE;
  if (env === 'prod' || env === 'production' || !env) env = 'prod';
  return env as 'prod' | 'uat' | 'development';
};

export default getEnv;
