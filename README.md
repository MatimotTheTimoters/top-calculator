# the-odin-project-calculator

## Checklist Tasks:
1. Touch files
    - [x] index.html
    - [x] styles.css
    - [x] script.js

2. Initialize index.html essentials
    - [x] Boilerplate
    - [x] Link to styles.css
    - [x] Link to script.js

3. Add structure to index.html
    - [x] Add header, main and footer
    - [x] Add calculator head and body
    - [x] Add input interface to calculator-head
    - [x] Add buttons to calculator-body

4. Add styles to styles.css
    - [x] calculator-container
    - [x] calculator-head
    - [x] calculator-body

5. Fix bugs in styles.css
    - [x] Button size too big
        - Make font size larger
        - Increase font size in calculator-head children
    - [x] Border radius not applying to calculator-head children
        - Apply rtl text direction to children
        - Set width to 90% of parent
        - Align children to center from calculator-head

6. Add variables and properties in script.js:
    - [x] Special buttons
    - [x] Operator buttons
    - [x] Number buttons
        - [x] Fix document selector not valid when using "1" ... as property names
            - Rename ID to their alphabetical counterparts (1 -> one)
            - Do the same to property names instead of using strings ("1" -> one)