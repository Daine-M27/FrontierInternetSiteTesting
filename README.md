# Frontier Internet Site Testing

### How to run Tests:

*assumes NPM

1. clone or download repository and open folder in the terminal
2. Run this command

`npm init`

3. Start server with this command

`$ java -jar /your/download/directory/selenium-server-standalone-3.5.3.jar`

4. Run test with

`npm test`



# Testing Explanation

### Objectives

1	Making sure images and graphics are all visible
2	Making sure prices, phone numbers, and timer are formatted correctly (using regex)
3	Making sure form is validated
	a.	submit form without entering any information
	b.	submit form by entering incorrect information
	c.	submit form by entering valid information
4	Making sure links direct correctly
5	Making sure text is correct / spelling is correct
6	Making sure JavaScript interactions are working i.e. hovering, clicking, animations
7	Making sure CSS is consistent across similar elements i.e. link styling, button styling


### My process
I began each test by locating the element to be tested with google chromes developer tools and finding the best selector to use with WebdriverIO.
Once I was able to console log the item by its selector I chose a relevant test criteria for its objective.

The test are written in the order of the objective listed above.

#### Objective 1 Images and Graphics

1. For this objective I selected each image or graphic by ID or class name and recorded the background image URL.
2. Then I used Chai-Http to make a request for that resource.
3. The test was verified by checking the type of response and the HTTP response code.


#### Objective 2 Price and Phone Number format

1.
