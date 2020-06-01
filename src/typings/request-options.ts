import { Format } from './format';
import { Lang } from './lang';

export interface RequestOptions {
  format: Format;
  lang: Lang;
  isDebugging?: boolean;
}
