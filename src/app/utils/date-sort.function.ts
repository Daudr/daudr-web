import { Job, Site } from '../interfaces';

export const dateSort = (a: Job | Site, b: Job | Site) => {
  if (new Date('01/' + a.periodo.da) > new Date('01/' + b.periodo.a)) {
    return -1;
  } else if (new Date('01/' + a.periodo.da) < new Date('01/' + b.periodo.a)) {
    return 1;
  } else {
    return 0;
  }
};
