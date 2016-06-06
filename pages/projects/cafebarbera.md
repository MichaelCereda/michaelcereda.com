---
title: Café Barbera
tagline: Café Barbera Platform
type: Everything
platform: IOS, Android, Web
status: released
technologies:
  - React
  - React Native
  - NodeJS
  - HTML
  - CSS
  - Redis
  - MongoDB
roles: Project Manager, Developer, UI/UX Designer

header_image_small: url(./assets/projects/CafeBarberaHeader.jpg)
header_image_big: url(./assets/projects/CafeBarberaHeader.jpg)
header_background_color: '#000300'
header_background_size: cover
---

-------

Café Barbera is a mobile application created to improve the brand awareness of Café Barbera, an international coffee house franchise.
It encourages consumer loyalty with rewards, special offers and indirect marketing promotions.

It's currently used in production by all the shops of the Café Barbera franchise.

I built the whole infrastructure starting from scratch using mainly __Javascript__
and a little bit of Native Code.

The Mobile Application has been made using __React Native__ while the backend has been created using __React__. This allows partial code recycling and helps avoid code repetition through the creation of modules with unique functionalities.
To maintain these modules, I use a private __Sinopia__ server.

## Server-side


One of the main challenges in building an app used worldwide is scalability
and handling usage peaks without causing any interruption.  

Café Barbera has 600 shops worldwide with an average of 500-1000 customers per day.  
It seems obvious that a cloud implementation is more than necessary.  

<img src='assets/projects/CafeBarberaRequestDiagram.png' class='media-element center' style='padding-left:20px; padding-right:20px' />

### API
The API is the heart of the system. It has been implemented using __NodeJS__, __MongoDB__ and __Redis__ and is deployed on __Amazon AWS__.

### Content delivery network
In order to be highly performant, the API doesn't handle any static content.  
Static files are delivered by a specialized CDN.

### Administration Backend
The app has been created using __React__, that can be rendered both on client and server (Isomorphism).
I used __Alt__ as __Flux__ implementation and __Material UI__ to provide nice and interesting components that can make the view pleasant to use.  

## Mobile App

<iframe class='media-element right' width="420" height="730" src="https://www.youtube.com/embed/B0ukQt7qktc" frameborder="0" allowfullscreen></iframe>

The app has been created using __React Native__, which simplifies the porting on both __Android__ and __IOS__.

### User interface
I started the creation of the UI with the idea that the app should be immediate and
hassle free, serving the user while in the shop and providing useful information
and push notifications while outside.  

The app is composed by three views: Home, ShopList and ShopDetail.  
The UI must be clean and straightforward and everything must provide the expected feedback.

__Home__ is where the user receives Messages, Offers and Rewards created specifically for him
(or for the cluster of users with similar 'interests').

__Shoplist__ contains the list of the shops sorted by distance from the user. If the user already collected points from a shop, the shop appears bigger and shows the points.

__ShopDetail__ is the customized page for the shop that contains offers, messages and rewards created by the shop administrator.  
The sections in this view are dynamic. They disappear if the section is empty in order to avoid any visual impediment and help the user to browse all the information.

When clicking on a card, a modal window is displayed, showing the related actions.
