import { Utils, getWebMeta } from '@/app/meta';

import { JSONFormatValidate } from './json-fromat-validate';

export const metadata = getWebMeta(Utils.JSONFormatValidate);

export default function Page() {
  return <JSONFormatValidate />;
}
