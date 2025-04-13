import { TypeGeneratorService } from '../src/type-generator.service';
import * as fs from 'fs';
import * as path from 'path';

describe('TypeGeneratorService', () => {
  let service: TypeGeneratorService;
  let testFilePath: string;

  beforeEach(() => {
    service = new TypeGeneratorService();
    testFilePath = path.join(__dirname, 'temp-test.ts');
  });

  afterEach(() => {
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate types from a simple variable declaration', () => {
    fs.writeFileSync(testFilePath, 'const testVar: string = "hello";');
    const types = service.generateTypes([testFilePath]);
    expect(types).toContain('type testVar = string');
  });
}); 