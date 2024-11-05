"# Loan Amortization System" 
## Branching Strategy
- `main`: Production-ready code.
- `development`: Integrate feature branches here. Periodically merged into `main` for releases.
- `feature/*`: New features, created off `development` and merged back when complete.
- `bugfix/*`: Bug fixes during development, created off `development` and merged back.
- `release/*`: Pre-release testing, created from `development` and merged into both `main` and `development` when done.
- `hotfix/*`: Critical fixes for `main`, merged into both `main` and `development` after the fix.
