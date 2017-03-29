# Ably Unit Testing Demo

To use:
1. npm install 
   - To get all the dependencies
2. tns run android  
   - This is needed to be done once to build the full app
3. tns test android 
   - This you use to actual run the tests


## Notes:

 - The `hooks/before-prepare/ably-testcopy.js` file is important to understand, it keeps the NS place for tests updated with the real version that are in the `node_modules/ably/specs` folder, but updating your your node-modules/ably folder, will the tests and main ably file be updated the next time you run tests.  
   - copies all the tests each time you run the app to the /app/test folder
   - copies the specs/common/module and specs/common/ably-common into the /app/ably folder
   - copies the latest ably-nativescript.js file from the node-modules/ably/browser folder to the /app/ably folder
 - The /app/ably/environment.js file is hard coded because it is running on the device, not on a machine with the environmental variables

If you wish to manually only run some tests; delete the tests you don't want out of the /app/tests folder, and then either disable or delete the `hooks/before-prepare/ably-testcopy.js` file.
   