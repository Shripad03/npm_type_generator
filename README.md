# TypeScript Type Generator

An Angular library for automatically generating TypeScript types from your project's source code. This library analyzes your codebase and generates type definitions for variables, objects, classes, and interfaces.

## Installation

```bash
npm install type-generator
```

## Usage

1. Import the TypeGeneratorModule in your Angular application:

```typescript
import { TypeGeneratorModule } from 'type-generator';

@NgModule({
  imports: [
    TypeGeneratorModule
  ]
})
export class AppModule { }
```

2. Inject and use the TypeGeneratorService:

```typescript
import { TypeGeneratorService } from 'type-generator';

@Component({
  // ...
})
export class AppComponent {
  constructor(private typeGenerator: TypeGeneratorService) {
    // Generate types from specific files or patterns
    const types = this.typeGenerator.generateTypes([
      'src/**/*.ts',
      '!src/**/*.spec.ts'
    ]);

    // Save the generated types to a file
    this.typeGenerator.saveTypes(types, 'generated-types.ts');
  }
}
```

## Features

- Automatically generates TypeScript types from your source code
- Supports variables, objects, classes, and interfaces
- Uses AST analysis for accurate type inference
- Integrates seamlessly with Angular projects
- Configurable file patterns and output

## API Reference

### TypeGeneratorService

#### generateTypes(sourcePaths: string[]): string
Analyzes the specified source files and generates TypeScript type definitions.
- `sourcePaths`: Array of file paths or glob patterns to analyze
- Returns: Generated type definitions as a string

#### saveTypes(types: string, outputPath: string): void
Saves the generated types to a file.
- `types`: Generated type definitions
- `outputPath`: Path where the types should be saved

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the library: `npm run build`
4. Run tests: `npm test`

## License

MIT 