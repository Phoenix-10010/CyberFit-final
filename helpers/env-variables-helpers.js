// retrieve environment variable or throw error if not found
export function getEnvVariable(val, varName) {
  if (!val) throw new Error(`Missing environment variable '${varName}'`);
  return val;
}