Live: https://elastic-poincare-6eb85f.netlify.app/

For the front end, I created a page for every function in the browser such as dashboard, stats, watch, past fights and bio. 

Before using the App, the user is prompted to signup or login. Once that is completed, the user is taken to the dashboard which is the default page conditioned on logging in. Once logged in, the signup and login buttons disappear. 

In App.js, I created the GlobalCtx function which makes it more efficient to get child elements with less code. 

Nav file under components hosts the navbar elements that I created while Header hosts the signup and login Links. This is where the login/logout presence is determined depending on where you are in the App. 

Bootstrap was used to achieve the desired look of the App. It was very handy in creating the large carousel, cards and stat table. 

I included responsive design with emphasis on mobile devices specifically Iphone X and Ipad pro. 

The front was deployed through netlify. Always remember to include the CI= in     "build": "CI= react-scripts build"
