# About

## What is the problem?
For our project, we chose to explore access to free or discounted contraceptives, which are not always easy to find. Some people seeking this information may just not live in a place where that information is accessible to them through word of mouth.

## Why is it a problem?
According to the Johns Hopkins Bloomberg School of Public Health, contraceptive usage likely prevents over 272,000 maternal deaths a year. ([source](https://www.jhsph.edu/news/news-releases/2012/ahmed-contraception.html)). Contraceptive usage has been significantly linked to better quality of life for women ([source](https://www.plannedparenthood.org/about-us/newsroom/press-releases/new-cdc-studies-show-access-birth-control-critical-women)). Along with that, it advances the economy for everyone ([source](https://www.plannedparenthoodaction.org/fight-for-birth-control/facts/4-reasons-why-birth-control-badass)). The fact that access to these resources is limited is a problem.

## Why did you choose to address this issue?
We have personal connections to people who would have loved an accessible application like this. William has a connection that comes from a lower income town where the teen pregnancy rates were high, and that was partially due to non-access to contraception. Programs like [Take Charge](https://www.hca.wa.gov/health-care-services-supports/apple-health-medicaid-coverage/take-charge-family-planning-non-medicaid) exist, but many just don’t know it exists. Our app aims to fix this issue of accessibility for various aspects.

## What has been done to fix this accessibility?
Aside from word of mouth or advocacy from Planned Parenthood, we haven’t found much when it comes to finding free or cheap forms of contraceptives. All solutions that we found were either [poorly implemented, insecure, non-inclusive, and inaccessible](http://www.condomfinder.org/find.php) or [localized to only a certain area and difficult to parse](https://www.kingcounty.gov/depts/health/locations/family-planning/birth-control.aspx). The information is just all over the place, or are on slow, bulky websites that won’t load quickly on lower end mobile devices.

## How is your solution better?
Our application has many features that set it apart from other applications:

* Information hub for resources in the about page
* Simple
* Fast loading application due to small build file size
* Quick lookups for addresses and loading data using Google Firebase and Google Cloud Geolocation API
* Easy to use filtering system for information
* Socially mediated using a system similar to Waze, where people self report. They can upvote and downvote
* Desktop and mobile friendly
* Scalable

# Stakeholders

## Young Adults

We aim to add a form of social media aspect to it in the form of the upvotes and downvotes. This system may attract more people to it, and it can be expanded upon in the future. We also chose to make the application a website rather than a React Native application because we knew it would be a one use sort of application, and young adults would not want to keep this app on their phone.

## Rural Areas

Our application is built to be reliable and fast. We specifically used React code splitting to make the file sizes all under 200KB. This means that the application not only downloads fast from the cloud, but the JavaScript gets parsed quickly on lower end mobile devices. Many individuals in rural areas will benefit from this because their network may not be reliable, and their phones may be lower end.

## Non tech-savvy

Design-wise, the application is very simple. When you get to the home screen, you can click on a button to travel to a map. Then, you can simply move around and look for a place nearby, or you can search for a place. The simplicity will allow for non tech savvy individuals to use the app easily and reliably.

# Ethical Concerns
There are ethical concerns to keep in mind when making this application. In states where the general public is against contraception, it can be pressured into shutting down. To attempt to counteract this, we planned a button for petitioning the selection, where people who trust the selected place would be able to sign an anonymous petition to keep it running. 

Along with this, some small town shops who do this may not want to give out the location on such a wide scale application. We plan to implement a ‘report’ button that will allow the place to set up a blackout area so they don’t appear on the map.

# Technical Description
Our application is implemented in **React** on the front end, using **React Router** for routing. We use this library for making a responsive web application

We connect and store data points to Google's **Firebase** to ensure quick connection speed to insert pieces of data.

We connect to **Google Cloud Geocoding API** to get quick address latitude and longitude locations

We use **LeafletJS**, which uses OpenStreetMap under the hood, for customizability and speed. OpenStreetMap is used online on a lot of websites, so the images may be stored in the cache to make the application load faster.

We use **MaterialUI** for ease of programming and also to provide users a more familiar application interface. 

# Future Plans

This application is far from done. There are many features we have yet to implement to truly make this into an accessible tool for all. We have ethical concerns to think about that we had previously mentioned as well.

* Use Google Cloud Functions to do filtering, rather than client side
* Hide the exposed API Key
* Implement more filtering functions in the search menu
* Fix UI inconsistencies
* Reduce duplicated code
* Implement more features for accessible contraceptives

## This app will be unable to be run after Dubhacks 2018

This is because it uses API keys that are publically available. These keys will be shut down after Dubhacks 2018. 

We are currently in the process of writing a server that will allow us to make api calls while keeping our api keys hidden as well as limiting the calls so we can keep this program completely free.
