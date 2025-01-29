import getEnv from '../getEnv';

async function getConfig<T>({
  appName,
  defaultConfig,
}: {
  appName: string;
  defaultConfig: T;
}): Promise<T> {
  if (process.env.NEXT_PUBLIC_IS_TEST_ENV) return defaultConfig;
  let config: T;
  let stage = getEnv();
  if (stage !== 'prod') stage = 'uat';
  try {
    const response = await fetch(
      `https://fake-api.com/${appName}/config/${stage}`,
      { next: { revalidate: 60 } }
    );
    if (response.ok) {
      config = await response.json();
    } else {
      config = defaultConfig;
    }
  } catch {
    config = defaultConfig;
  }
  return config;
}

export default getConfig;
