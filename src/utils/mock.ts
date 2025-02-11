import { simpleFaker as mock } from '@faker-js/faker';

mock.seed(1);

function mockW(weight: number) {
  if (weight < 1) {
    return mock.number.float({ fractionDigits: -Math.log10(weight) });
  }
  return mock.number.int({
    min: weight,
    max: weight * 10 - 1,
  });
}

export { mock, mockW };
