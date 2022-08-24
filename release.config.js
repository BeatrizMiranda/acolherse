module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/BeatrizMiranda/acolherse',
  plugins: [
    ['@semantic-release/github', {
      assets: [
        { path: 'build.zip', label: 'Build' },
        { path: 'coverage.zip', label: 'Coverage' }
      ]
    }],
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
  ]
}
