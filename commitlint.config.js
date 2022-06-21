module.exports = {
    extends: ['@commitlint/config-conventional'], rules: {
        'type-enum': [2, 'always', [
            'feat', 'fix', 'perf', 'refactor', 'build', 'style', 'docs', 'chore'
        ]],
        'type-case': [0]
    }

};
