declare module "potrace-wasm" {
  const potrace: {
    trace: (buffer: Buffer | Uint8Array) => Promise<string>;
  };

  export default potrace;
}
