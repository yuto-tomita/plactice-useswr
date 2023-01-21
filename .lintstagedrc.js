import path from 'path'

export default {
  '*.{js,ts,tsx}': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file))
    return `ng lint myProjectName --files ${relativePaths.join(' ')}`
  },
}
