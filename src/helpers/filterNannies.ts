import { Filter, NannyCardData } from '../types';

export const filterNannies = (nannies: NannyCardData[], filter: Filter) => {
  switch (filter) {
    case Filter.A_to_Z:
      return nannies.sort((a, b) => sortAscending(a, b, 'name'));
    case Filter.Z_to_A:
      return nannies.sort((a, b) => sortDescending(a, b, 'name'));
    case Filter.LessThan10:
      return nannies.filter((nanny) => nanny.price_per_hour <= 10);
    case Filter.GreaterThan10:
      return nannies.filter((nanny) => nanny.price_per_hour >= 10);
    case Filter.Popular:
      return nannies.sort((a, b) => sortAscending(b, a, 'rating'));
    case Filter.NotPopular:
      return nannies.sort((a, b) => sortDescending(b, a, 'rating'));
    case Filter.ShowAll:
      return nannies;
  }
};

const sortAscending = (a: NannyCardData, b: NannyCardData, field: 'name' | 'rating') => {
  if (a[field] < b[field]) {
    return -1;
  } else if (a[field] > b[field]) {
    return 1;
  }

  return 0;
};

const sortDescending = (a: NannyCardData, b: NannyCardData, field: 'name' | 'rating') => {
  if (a[field] < b[field]) {
    return 1;
  } else if (a[field] > b[field]) {
    return -1;
  }

  return 0;
};
