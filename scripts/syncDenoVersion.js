import fs from "node:fs/promises";

const main = async () => {
  // get version from package.json
  const pkgJsonStr = await fs.readFile("package.json", "utf8");
  const pkgJson = JSON.parse(pkgJsonStr);
  const pkgVersion = pkgJson.version;

  if (pkgVersion) {
    // write version to deno.json
    const denoJsonStr = await fs.readFile("deno.json", "utf8");
    const denoJson = JSON.parse(denoJsonStr);
    denoJson.version = pkgVersion;
    await fs.writeFile("deno.json", JSON.stringify(denoJson, null, 2));
  }
};

main();
