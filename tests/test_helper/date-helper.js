export function stubDate(constantDate) {
  let _originalDate;

  beforeAll(() => {
    _originalDate = Date;

    Date = class extends Date {
      constructor() {
        return constantDate
      }
    }
    
  });

  afterAll(() => {
    Date = _originalDate;
  });
};