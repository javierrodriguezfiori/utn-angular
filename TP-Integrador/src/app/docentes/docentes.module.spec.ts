import { DocentesModule } from './docentes.module';

describe('DocentesModule', () => {
  let docentesModule: DocentesModule;

  beforeEach(() => {
    docentesModule = new DocentesModule();
  });

  it('should create an instance', () => {
    expect(docentesModule).toBeTruthy();
  });
});
