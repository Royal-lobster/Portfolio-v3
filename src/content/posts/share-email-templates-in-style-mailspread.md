---
title: Share Email Templates in style with Mailspread
description: Check out how i made a tiny web application that lets you to share email templates in style
pubDate: Jul 08 2022
coverImage: ../../assets/mailspread-cover.png
---

# 🧘🏻‍♂️Quick introduction
[Mailspread](https://mailspread.netlify.app/) is a email template sharing application that lets creators to create email templates and share it with their users. And yes its yet an other mailto generator but with powers !

This tool is so simple that it has only 2 pages. One for creating the templates (create page) and other for people to use those templates (send page). Hang on while I explain what it does and then lets go to the part where you can read how I did it !

## ☝The Create page
In create page, Mailspread lets creators define the email template by entering to addresses, email subject, and the body of the email. 

![send-page-preview.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1643966813285/kc8vmT6HA.png)

The body of the email has some super powers ! creators can to use ***template tags*** in their templates. These template tags are of form ```{{value:type}}```. 

* **Value** is used to hold information about what the tag is going to be replaced with. like *first name* or *business email* or *how many eyes does that alien have when you spotted it*, so on. you get to name it !
* **Type** is used to give type of the value. it can be any valid html tags like ```text```, ```number```, ```date```, ```range```, ```color```, ```time``` so on. the default type is set to ```text``` so you don't need to mention it.

so here are few example of template tags in mail spread. ```{{full name : text}}```, ```{{roll : number}}```, ```{{deadline : date}}```, ```{{the color that I want to have my button colored : color}}```. Since the text is optional as I said, you can just write ```{{full name}}```

After filling all, by clicking the generate link button, a link will be copied to clipboard which can be further pasted anywhere and sent to users of the template. That's it ! Creators can take a good rest while Mailspread does the rest of the work in send page.

## ✌️ The send page 
Each template tags written in body gets converted to input fields in send page. So users can fill these input fields right away to replace all the funky {{template tags}} with actual matter that they want.

![send-page.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1643970015108/-9dz17r3l.png)

After filling the form, They click on the *generate in your email app* button which then takes user to their default email app with all the template information filled in. That's it ! now users are one step away from clicking on the send button after checking the generated template is good to be delivered. Now coming to the part, What contributes for existence of this.

# ❓Why did I make it ?
The first reason is... *(drum roll)*… I am just reading [60 hottest front end tools from CSS Tricks](https://css-tricks.com/hottest-front-end-tools-in-2021/) and wanted to give Pico CSS  from it a try !

Jokes aside, it is the period where omicron is popping up the sleeves in ending of January 2022 here in India and our university is refusing to let students to attend classes in online mode. So we decided to write emails to administration to let them know the suffering. We have few very good writers in class to create email templates for it. But to spread it by just forwarding in WhatsApp groups seemed bit of an hassle.  That's why i created Mail spread ! (Pico is still cute)

# 🚧 The development process
I always embrace react for all of my projects, but I wanted to give Vanilla JS a try after long time. And yes I got that taught while having a vanilla shake. And of-course [Pico CSS](https://picocss.com/) as styling library ! 

This is the project where I got to see the full power of little dude who shows up occasionally when it is not down "due to technical reasons", The GitHub Copilot ! it suggested most of the code ! may be because its Vanilla JS but I just noticed it so much in this project.

### Step 1 Building Create page
I created ```create.html``` with a form with ```input``` fields for *To Address* and *Subject*, a ```text area``` for *body* with labels and placeholders for each and a submit button. Then linked Pico CSS CDN link in head of the document. and Boom ! I witnessed Pico in action in first time ! Its so cool ! The magic is its styling stuff directly on html elements and not using classes for everything. I found it's approach clean when I get to tweak CSS styling of few elements by just override the styles of Pico with just plain classes. No ```!important``` hacks !

Then linked it to a global.css style sheet to do a controversial thing of centering the form and styling few elements as I said with classes. After that, the fun part started !

Created ```create.js``` to hold all the logic and linked it back in ```create.html```. All the stuff to do  here is to -
1. Fetch data from the form on form submit
2. Encode all the data to base64 
3. Create a link to send page with query params of to address, subject and body with encoded data so send page can use it to create input fields
4. Shorten it with TinyUrl Service so it don't scare people
5. Copy the link to clipboard and throw a toast to show the link is copied to clipboard

Completed fetching data in good old imperative code of DOM Manipulation. Then used a [Base64 encoding-decoding library](https://github.com/dankogai/js-base64) to get the things running. Tried to stay away from libraries for this one but realized the built in ```atob``` fails to encode emojis 😐. 

Later down the lane, created the URL and shortened it. if you don't know, you can shorten link with TinyUrl Service by sending get request to this ```https://tinyurl.com/api-create.php?url=``` with your long URL at the end after ```url=```

### Step 2 Building Send page
Created an new send.html page and added basic markup for branding title and an article tag which gets shown as a card by Pico CSS. the insides of the card are dynamically generated by JavaScript. Added basic styling similar to create page and linked send.js script file in send.html. 

The things done in send.js are
1.  get the queries from the URL
2. decode them from base64 to original information
3. find all the template tags, sanitize them and store them in an object in from of ```{value : "type"}```
4. for every template tag from object, render an input field in a form with name and place holder derived from keys of the object and the type attribute from value of the object and set required attribute to all fields
6. create a button of submit type in form and add the event listener on it to take all the data from input fields, replace all the tags with the data and open it via ```mailto``` link.

check out the [code in github](https://github.com/Royal-lobster/mailspread/blob/main/js/send.js) if you are interested in code.

### Step 3 Refinements
After completing first iteration, realized that it works like a charm ! Added few more features like highlighting the template tags in create page for easy visualization, made it auto resize height according to the content in body text area, converted few input types like dates before appending it to final body in mailto link and few more tiny winney stuff.

That's it ! completed the project just under a day and now its working good as expected. Again, this blog is about sharing overall development process so if you are interested in code, look up in [github](https://github.com/Royal-lobster/mailspread)! I commented the code well so its easy to read. (Don't under estimate comments ! I also used them to generate auto completions from co pilot 🙈) 

# ☁️Use Cases
The primary users of it is me and my friends, but it is also useful in situations like -
* bunch of people to send a same email template to same set of receivers like petitions and stuff⚖️
* collecting user information by email like tiny bug reports ?
* creating mini surveys without using other third party apps 📶, etc.

I would be pleased to here from you guys for any more use cases you would like to use this for in comments !