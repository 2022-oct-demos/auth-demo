const SUPABASE_URL = 'https://vmhclpevfecxhpxwubhs.supabase.co';

const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGNscGV2ZmVjeGhweHd1YmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5Nzk4MzgsImV4cCI6MTk2ODU1NTgzOH0.pWvGlCrbKNRZWBKDRsPR8rGxu8nodj7nq8cY1rPNglI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    console.log('client', client.auth.session());
    return client.auth.session() && client.auth.session().user;
}

// automatically redirect the user back to the login page if they are not logged in
export function checkAuth() {
    const user = getUser();
    if (!user) location.replace('/');
}

// when a user tries to visit a page that calls this function, automattical redirect the user away from the login page IF they are already logged in
export async function redirectIfLoggedIn() {
    const user = getUser();

    if (user) location.replace('./other-page');
    //get User and check if exists
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    console.log('response', response);
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}

//fetch all posts
export async function fetchPosts() {
    const response = await client.from('demo_posts').select('*');
    return response.data;
}

// create post function
export async function createNewPost(post) {
    const response = await client.from('demo_posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}
