import { vi } from "vitest";

vi.mock("../../agent-tool-definition-adapter.js", async (importOriginal) => {
  const {
    createClientToolNameConflictError,
    findClientToolNameConflicts,
    getToolDefinitionSource,
    isClientToolNameConflictError,
    toClientToolDefinitions,
  } = await importOriginal<typeof import("../../agent-tool-definition-adapter.js")>();
  return {
    createClientToolNameConflictError,
    findClientToolNameConflicts,
    getToolDefinitionSource,
    isClientToolNameConflictError,
    toClientToolDefinitions,
    toToolDefinitions: (tools: unknown[]) => tools,
  };
});
