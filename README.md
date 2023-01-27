# Dema AI | code test

This project shows my skills as a frontend-engineer. My main focus was modularity and ease of use

## Project structure

```
├── src
│   ├── components
│   │   ├── layouts
│   │   │   ├── BeerPageLayout.tsx
│   │   │   └── BeersPageLayout.tsx
│   │   ├── skeletons
│   │   │   ├── SkeletonImage.tsx
│   │   │   └── SkeletonText.tsx
│   │   ├── BeerCard.tsx
│   │   ├── ErrorDisplay.tsx
│   │   ├── Navbar.tsx
│   │   └── PaginationNavbar.tsx
│   ├── hooks
│   │   ├── useDebounce.ts
│   │   └── useQuery.ts
│   ├── types
│   │   └── Beer.ts
│   ├── views
│   │   ├── BeersViews.tsx
│   │   └── BeerView.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
```

## Run locally

1. Clone repo
2. Install all node modules with your preferred packaged manager (this repo uses yarn but that will not matter)
3. Run the dev command **(yarn dev / npm run dev / pnpm run dev)**

## Tech stack

1. **Typescript** - Do I need to explain?
2. **React with Vite** - When choosing the framework around React, I was between Vite and Next.js. I ended up choosing Vite as I felt that I just wanted to focus on the basics. Next.js would be a great choice here and you can find more info on ways it could improve the website in the improvements section down below
3. **React router dom** - Simple, quick, and well-adopted.
4. **Tailwind** - Tailwind allows me to get a style layout from ideé to finish in the shortest time possible. It can both speed up my development but also the end page speed as it ships very little CSS with almost no redundancy.
5. **Vitest** - As I used vite for compiling my React project, vitest seemed like an obvious pick. It uses Typescript by default and is great for productivity.

## Features

1. **Grid View** - The website uses punk-api to display information about different beers. The home page shows a list of beers in a grid
2. **Pagination** - The home page uses pagination to limit the data sent to the client. Each page has 20 beers and the user can navigate between pages by the pagination navbar at the bottom of the page. If the user reaches the end of the beers, they will not be able to keep scrolling to the next page. The pagination is kept track of via the URL, so for example "/?page=4" would show the fourth page.
3. **Single beer view** - If a user finds a beer interesting they can click it to see a different view that shows more info about that single beer. This view lives under the URL, "/beers/:id", which helps with user experience and can more easily help our users see what page they are on, but also lets a user send the URL to a friend for
4. **Search** - A user can search for a beer by name and see a list of the first 4 beers that match the API. The decision to only display the first 4 beers is a UX decision as the API may return up to 25 beers which would be too much info for our users. A user can just click on one of the beers from the popup to get redirected to the single beer view explained in the point above. The search input is also debounced meaning that is there a 500ms delay before the request is sent to optimize the performance of the client app and weak devices and save our server from getting unnecessary requests
5. **Skeleton loaders** - For both the grid view of all cards and also the single beer view, it shows a skeleton loader before the data has been fetched
6. **Mobile responsiveness** - The website works well on mobile
7. **Component testing** - Vitest was used to create tests for the website. Some tests are for example checking that the **Navbar** component renders the right text and that the input field can be written to, that the home page first shows exactly 20 skeleton cards and then shows exactly 20 normal beer cards when the data has loaded.

## Improvements

1. First, depending on in which direction this project would go in the long run, swapping out **Vite** would be a good first thing to do to improve scalability as the project grows larger. **Next.js** is the most popular **React** framework and would be a great choice for developing this sort of app as **Next.js** fully supports a lot of different rendering techniques, like statically rendering all pages on build time to optimize speed at cost of dynamic content or serverside rendering all requests as they come in. From my inspection, the current beer total seemed to be around 240, which we could then build at build time using static site generating and caching all the sites making any requests **blazingly** fast. This would also allow us to add meta tags to the HTML so that for example if a user might tweet out a link to a specific beer they like, the **tweet** could show info about the beer like the **image** and **name**. This would also help the site improve its **SEO ranking**, gaining more traffic to the our website. **Next.js** isn't the only choice, **Gatsby** and **Remix** are also two alternatives but due to **Next.j's** massive popularity it would be a better choice as it would help with recruiting later on when we want to scale our developer team for example.
2. When it comes to the current state of fetching data in the application I made my own little hook to handle the fetching. This was only for one reason which was that I wanted to show that I understand how data fetching works and how to deal with it. For a real production app, this should probably be swapped out for a third-party package like **Tanstack Query** or **useSwr** that implements caching and other important features. Alternatively, if something like **Next.js** were to be implemented we would use the data fetching patterns from that framework where it seemed fitting.
3. The testing portion of the app is pretty bare bones, there are still a lot of things to be tested that I did not test as I wanted to focus on the other parts of the website
4. Typesafty is a crucial part of writing maintainable code that spans multiple developers. For this project, I tried my best by creating a type that represents a beer but was ultimately limited by the inconsistencies of the API. Some fields were very inconsistent if they would exist or not making me need to write some ugly conditional logic in some places. This could be solved by checking up on the database and generating a type declaration by inspecting how all the records are structured, in this example that wasn't an option.

All and all, from starting to finishing this README file, this project took me around about 5 hours.
