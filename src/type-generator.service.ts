import { Project, SourceFile, Node, Type } from 'ts-morph';

export class TypeGeneratorService {
  private project: Project;

  constructor() {
    this.project = new Project({
      tsConfigFilePath: 'tsconfig.json',
    });
  }

  /**
   * Analyzes source files and generates TypeScript types
   * @param sourcePaths Array of file paths or glob patterns to analyze
   * @returns Generated type definitions as a string
   */
  public generateTypes(sourcePaths: string[]): string {
    // Add source files to the project
    this.project.addSourceFilesAtPaths(sourcePaths);
    let typeDefinitions = '';

    // Process each source file
    this.project.getSourceFiles().forEach(sourceFile => {
      typeDefinitions += this.processSourceFile(sourceFile);
    });

    return typeDefinitions;
  }

  private processSourceFile(sourceFile: SourceFile): string {
    let definitions = '';

    // Process variables
    sourceFile.getVariableDeclarations().forEach(variable => {
      const type = variable.getType();
      definitions += this.generateTypeDefinition(variable.getName(), type);
    });

    // Process classes
    sourceFile.getClasses().forEach(classDecl => {
      definitions += this.generateClassDefinition(classDecl);
    });

    // Process interfaces
    sourceFile.getInterfaces().forEach(interfaceDecl => {
      definitions += this.generateInterfaceDefinition(interfaceDecl);
    });

    return definitions;
  }

  private generateTypeDefinition(name: string, type: Type): string {
    return `type ${name} = ${type.getText()};\n\n`;
  }

  private generateClassDefinition(classDecl: Node): string {
    return `${classDecl.getText()}\n\n`;
  }

  private generateInterfaceDefinition(interfaceDecl: Node): string {
    return `${interfaceDecl.getText()}\n\n`;
  }

  /**
   * Saves generated types to a file
   * @param types Generated type definitions
   * @param outputPath Path to save the generated types
   */
  public saveTypes(types: string, outputPath: string): void {
    const outputFile = this.project.createSourceFile(outputPath, types, { overwrite: true });
    outputFile.saveSync();
  }
} 