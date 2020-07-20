import { Mapping } from './map.pipe';

const mappingFunction = (value: any) => {
  return value.map((item: any) => item.label);
};

describe('Mapping', () => {
  it('create an instance', () => {
    const pipe = new Mapping(); // * pipe instantiation
    expect(pipe).toBeTruthy();
  });

  it('truncate a string if its too long (>20)', () => {
    // * arrange
    const pipe = new Mapping();
    // * act
    const ret = pipe.transform([{ label: '25' }], mappingFunction);
    // * asser
    expect(ret).toEqual(['25']);
  });
});
