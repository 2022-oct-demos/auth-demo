
# From Scratch Bulletin Board Plan

1. Database Setup
- Add a new table called posts
- Add three columns (title, description, contact) plus any others you want to include. Can all be varchars.
- Copy your key / url into your fetch-utils and add your client code
```js 
const SUPABASE_URL = '';
const SUPABASE_KEY = '';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
```
- Add some rows for testing
- Enable row level security

2. Posts Page
- TDD a render function for displaying your post information
- Add your fetchPosts to fetch-utils.js
- Add your policy for selecting data (allow all users)
```js
export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}
```
*Validation step: console.log your results to make sure you're getting the data back from the database*

- Add an async loadData function that you will call immediately to load the data, loop through and render each item on the page

3. Auth page
*don't worry about redirects at first*

- Add your sign up form
- Add your signUpUser function to fetchUtils
- Add event listener to form submit
- Call function and ensure you get a user back from supabase
- repeat for sign IN
- Add your redirects

4. Create Page
- Add your create folder, index.html, and create.js
- Add a form for posts in your index.html
- Add form event listener, use FormData to get your data from your form
- Validation step: console.log your FormData to make sure you're getting the info correctly
- Add createPost to your fetch-utils.js
export async function createNewPost(post) {
  ```js  
    const response = await client.from('posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}
```
- Call your create function on form submit
*Validation step: Confirm new data being added to table in Supabase*

- Add in our redirects

- If not logged in, redirect to auth page
- Redirect to home after succesful insert

5. Add your home page header with links

---

##  Demo Plan

### HTML

    - landing page: AUTH
        - sign up form
        - sign in form
    - home page
        - link to CREATE page
        - button to sign out
    - create page
        - form to input post information

### Events

    - landing page: form submits
    - home page: window load event
    - create page : form submit

### Slices

1. signUp
2. signIn
3. redirects (including Signing OUT)
4. create page
