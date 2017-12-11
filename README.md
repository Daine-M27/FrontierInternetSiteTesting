# Frontier Internet Site Testing

### How to run Tests:

*assumes NPM

1. Clone or download repository and open folder in the terminal

2. Navigate to folder and run this command

`npm install`

3. Start server with this command

`$ java -jar /your/download/directory/selenium-server-standalone-3.8.1.jar`

4. Run test with

`npm test`



## Testing Explanation

### Objectives

1.	Making sure images and graphics are all visible

2.	Making sure prices, phone numbers, and timer are formatted correctly (using regex)

3.	Making sure form is validated

	a.	submit form without entering any information

	b.	submit form by entering incorrect information

	c.	submit form by entering valid information

4.	Making sure links direct correctly

5.	Making sure text is correct / spelling is correct

6.	Making sure JavaScript interactions are working i.e. hovering, clicking, animations

7.	Making sure CSS is consistent across similar elements i.e. link styling, button styling


### My process
I began each test by locating the element to be tested with google chromes developer tools and finding the best selector to use with WebdriverIO.
Once I was able to console log the item by its selector I chose a relevant test criteria for its objective.



The test are written in the order of the objective listed above.


#### Objective 1 Images and Graphics

1. For this objective I selected each image or graphic by ID or class name and recorded the background image URL.
2. Then I used Chai-Http to make a request for that resource.
3. The test was verified by checking the type of response and the HTTP response code.


#### Objective 2 Price and Phone Number format

1. Each phone number element was selected by href address.
2. The text for the element was tested against a Regular Expression

    a. ^(?:\+?1[.]?)?\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$/

    b. allows for the following pattern: 1.###.####.####

    c. test was verified with true response


3. Elements with price data where selected with the p element and class name
4. The text was checked against a Regular Expression

    a. (?:[$])\s*\d+(?:\.\d{2})?

    b. allows for the following pattern(s): $## or $##.##

    c. test was verified with true response

#### Objective 3 Form Validation

1. The form was selected by class Name
2. Submit button selected by ID
3. Each test case was tested on a separate criteria

    a. Correct information verified with new URL of results page

    b. Missing information verified by presence of text in error message

    c. Incorrect information verified by no response after waiting period

#### Objective 4 Link Direction

1. Created an array of href values from link element selector
2. Looped through each link
3. Verified with HTTP status

#### Objective 5 Spelling

1. Created an array of element selectors that contain text
2. Parsed text strings into words
3. Filtered non text from words list with Regular Expression
4. Utilized SpellChecker to loop through words list from site
5. Created array of misspelled words
6. Verified test with 0 misspelled words in array

#### Objective 6 Hovering and Clicking (partial)

1. Created list of list item IDs in footer area
2. Scrolled to each link inside list item
3. Moved mouse to link item and paused for hover effect
4. Verified test by comparing color code of link after hover


#### Objective 7 Compare CSS Styling

