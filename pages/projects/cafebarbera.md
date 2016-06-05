---
title: Café Barbera
tagline: Café Barbera Platform
type: Everything
platform: IOS, Android, Web
status: released
technologies:
  - React
  - ReactNative
  - NodeJS
  - HTML
  - CSS
  - Redis
  - MongoDB
  - Postgres
roles: Project Manager, Developer, UI/UX Designer

header_image_small: url(./assets/projects/CafeBarberaHeader.jpg)
header_image_big: url(./assets/projects/CafeBarberaHeader.jpg)
header_background_color: '#000300'
header_background_size: cover
---

-------

Café Barbera is a mobile application created to improve the brand awareness and
encourage consumer to be more loyal, with rewards, special offers and so on.

It's currently used in production by all the shops of the Café Barbera franchise.

I built the whole infrastructure starting from scratch using mainly __Javascript__
and a little bit of Native Code.

One great aspect about using __React__ both on backend and Mobile app is the possibility of re-using parts of code and logic.
To help myself to mantain unique modules with reusable funcionalities I created a private __Sinopia__ server, that allows me to 

## Server-side
One of the main challenges in building an app used worldwide is scalability
and handling usage peaks without causing any interruption.  

Café Barbera has 600 shops worldwide with an average of 500-1000 customers per day.  
Seems obvious that a cloud implementation is more than necessary.  

### API
The API is the heart of the system, it has been implemented using __NodeJS__, __MongoDB__ and __Redis__ and deployed on __Amazon AWS__.

### Content delivery network
In order to be highly performant the API doesn't handle any static content.  
Static files are delivered by a specialized CDN.

### Administration Backend
The app has been created using __React__, that can be rendered both on client and server (Isomorphism).
I used __Alt__ as __Flux__ implementation and __Material UI__ to provide nice and interesting components that can make the view pleasant to use.  

## Mobile App

<iframe class='media-element right' width="420" height="730" src="https://www.youtube.com/embed/B0ukQt7qktc" frameborder="0" allowfullscreen></iframe>

The app has been created using __React Native__, that allows to port on both __Android__ and __IOS__ without problems.

### User interface
I started the creation of the UI with the idea that the app should immediate and
hassle free, serving the user while in the shop and providing useful information
and push notifications while outside.  

The app is composed by three views, Home, ShopList and ShopDetail.  
The UI must be clean and straightfoward, eveything must provide feedback when touched.

__Home__ is where the user receives Messages, Offers and Rewards created specifically for him
(or for the cluster of users with similar 'interests').

__Shoplist__ contains the list of the shops sorted by distance from the user, if the user already collected points from a shop, the shop appears bigger and shows the points.

__ShopDetail__ is the customized page for the shop, it contains offers, messages and rewards created by the shop administrator.  
The sections in this view are dynamic, they disappear if the section is empty in order to avoid any visual impediment and help the user to browse all the information.

When clicking on a card a modal window is displayed, showing the related buttons
