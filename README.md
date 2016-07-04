# Getting started

Note: This project requires node to run, install node on your machine if you haven't already

```bash
brew install node
```

* In your terminal, run the commands `npm install` then `npm start`
* In the browser, navigate to: "http://localhost:3000"
* Enjoy!

# Future Ideas
While deciding how to design the application, I came up with and implemented a few different approaches. In the end, I decided to create something that was clean, simple, and flat. I chose a minimal color scheme and to display a centered converter with only three components: A Fahrenheit temperature, a Celsius temperature, and a form for inputting temperature. This application draws the user's eye to a single point and is very clear in what information is being presented as well as how the user can manipulate the information.

Here is a list of some of the other designs and features I thought of:

* Make the colors of the degree text change from blue to red depending on the temperature (e.g. 100 degrees F and 37.78 degrees C both display in red)
* Similar to above, but have colors scale in relation to what they're measuring (e.g. Fahrenheit is a temperature scale relative to humans, while Celsius is a temperature scale relative to water. 100 degrees Fahrenheit is hot because it's hot for a human, but 37.78 degrees Celsius is not warm for water. Fahrenheit would be a red shade, but Celsius would remain in the blue family)
* Thermometer graphic(s)
 * One idea was to have a thermometer next to each temperature display that would fill with red according to the temperature (like a real thermometer)
 * Another idea was to have a single thermometer that would fill with red depending on the temperature, with numbers on either side indicating the degrees in fahrenheit or celsius
* Similar to the ideas above, but instead of a form at the bottom to enter the temperature there would be two thermometers that the user would click inside of to increase or decrease the temperature. The other thermometer would adjust to its equivalent (e.g. User clicks to 50 degrees in the Fahrenheit thermometer, the Celsius thermometer adjusts to 10 degrees)
* A wheel similar to the timer app in iOS that the user can scroll up or down, with temperatures on either side in Fahrenheit and Celsius that update as the user scrolls.
