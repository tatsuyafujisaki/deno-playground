import { walkSync } from "jsr:@std/fs/walk";

const entries = walkSync(Deno.cwd(), {
  maxDepth: 1,
  includeDirs: false,
  exts: [".JPG"],
});

const sortedEntires = Array.from(entries).sort((a, b) =>
  a.path.localeCompare(b.path)
);

sortedEntires.forEach((entry, index) => {
  Deno.renameSync(entry.path, `xxx-${index + 1}-yyyy-mm-dd.jpg`);
});
