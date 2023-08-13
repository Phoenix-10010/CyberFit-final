const { join, resolve } = require('path')
const { readdir, readFile, writeFile } = require('fs/promises')
const { randomUUID } = require('crypto')

// Script to add id in json files (cybersecurity frameworks)

async function formatJson() {
  const jsonFilesFolder = resolve(__dirname, '..', 'assessments')
  const dirents = await readdir(jsonFilesFolder, { withFileTypes: true, })


  for (const dirent of dirents) {
    const canRead = dirent.isFile() && dirent.name.endsWith('.json')
    if (canRead) {
      const filePath = join(jsonFilesFolder, dirent.name)
      const data = await readFile(filePath, 'utf-8')
      const jsonData = JSON.parse(data)
      setObjectId(jsonData)
      const [fileName] = dirent.name.split('.')
      jsonData.id = fileName
      await writeFile(filePath, JSON.stringify(jsonData, undefined, 2))
    }
  }
}

function setObjectId(object) {

  if (object.id === undefined) {
    object.id = randomUUID()
  }

  for (const key in object) {
    if (Array.isArray(object[key])) {
      for (const item of object[key]) setObjectId(item)
    }
  }
}

formatJson()