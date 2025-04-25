// generate-structure.js
const fs = require("fs");
const path = require("path");

const folders = [
  "src/config",
  "src/i18n/en",
  "src/i18n/vi",
  "src/libs/constants",
  "src/libs/decorators",
  "src/libs/entities",
  "src/libs/enums",
  "src/libs/guards",
  "src/libs/helpers",
  "src/libs/interfaces",
  "src/libs/middlewares",
  "src/libs/pipes",
  "src/libs/filters",
  "src/libs/repositories",
  "src/modules/shared/database",
  "src/modules/shared/cache",
  "src/modules/auth/controller",
  "src/modules/auth/service",
  "src/modules/auth/repository",
  "src/modules/auth/constant",
  "src/modules/auth/dto",
  "src/modules/auth/interface",
  "src/modules/user/controller",
  "src/modules/user/service",
  "src/modules/user/repository",
  "src/modules/user/constant",
  "src/modules/user/dto",
  "src/modules/user/interface",
];

folders.forEach((folderPath) => {
  const fullPath = path.join(__dirname, folderPath);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log("✅ Created:", folderPath);
  } else {
    console.log("⚠️ Already exists:", folderPath);
  }
});
