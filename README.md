# Math Worksheet Generator

## TODO *(this isn't in any sort of priority order)*

- [ ] Responsive design (not that it really needs it)
- [ ] Add option to save/load default settings
- [ ] Add option to save/load preset settings: so you can create settings for addition, subtraction, etc separately
- [ ] Add "no carrying" option to addition problems
- [ ] Add "no borrowing" option to subtraction problems
- [x] Add horizontal display option
- [x] Add option to hide the problem number
- [ ] Add option to insert page break after *x* number of problems. This could be used to generate multi-page worksheets cleanly.
- [ ] Add login/sign up option

## Optimize me
- [ ] Each lesson is governed by its own algorithm, find the potential polymorphs.
  - I would start with the basic equations and go from there (n+n, n-n, n*n, n/n)

## Compile Errors: Found and resolved along the way
- Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (83)
  - FIX npm rebuild node-sass