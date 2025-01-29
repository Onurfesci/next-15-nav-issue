// Use type safe message keys with `next-intl`
type Messages = typeof import('../../messages/en-GB.json');
declare interface IntlMessages extends Messages {}
