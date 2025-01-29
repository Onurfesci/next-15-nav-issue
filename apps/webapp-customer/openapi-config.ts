// May use one day if @rtk-query/codegen-openapi fixes issues!

import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'openapi/openapi.json',
  apiFile: './src/redux/services/api.ts',
  apiImport: 'api',
  flattenArg: false,
  outputFiles: {
    './src/redux/services/ledger.ts': {
      filterEndpoints: [/ledger/i],
      tag: true,
    },
    './src/redux/services/user.ts': {
      filterEndpoints: [/user/i],
      tag: true,
    },
    './src/redux/services/beneficiaries.ts': {
      filterEndpoints: [/beneficiar/i],
      tag: true,
    },
    './src/redux/services/journals.ts': {
      filterEndpoints: [/payment/i],
      tag: true,
    },
  },
  hooks: true,
};

export default config;
