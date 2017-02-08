# Backand Ionic 2 Starter

Compatible with Ionic 2.2.1

## Running the app 

1. Create an Ionic app:

        ionic start myApp https://github.com/backand/ionic2-starter1 --v2
    
        cd myApp

2. Install Cordova Plugins

        ionic plugin add cordova-plugin-inappbrowser

3. Include dependencies in `src/index.html`, above `<script src="build/main.js"></script>`: 

        <script src="socket.io.min.js"></script>

3. Set details of your app in `src/app/app.component.ts`:

			       backand.init({
				        appName: 'your app name',
				        signUpToken: 'your signup token',
				        anonymousToken: 'your anonymousToken token',
				        runSocket: true,
				        isMobile: platform.is('mobile')
				    });

4. Install dependencies:

	    npm install @backand/angular2-sdk --save
	    npm install socket.io-client --save
	    npm install @types/node --save-dev --save-exact
	    npm install @types/socket.io-client --save-dev --save-exact

5. Run the app
    
        ionic serve

## CRUD

To fetch, create, and filter rows, from an object, say `stuff`, modify 
the object used in these functions in `src/pages/crud/crud.ts`:

    getItems
    filterItems
    postItem

replacing `todo` with the name of your object, `stuff`

## Social Signup 

The app opens a dialog supplied by the social network. 

## Socket Service

To subscribe to event `items_updated` from server side via sockets, in your component do, as in `src/app/pages/crud/crud.ts`:

      
		    this.backand.on("items_updated",
		        (data: any) => {
		            // do something with data
		        }
		    );