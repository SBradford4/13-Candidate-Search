// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: number;
    name: string;
    username: string;
    location: string;
    login: string;
    bio: string;
    avatar_url: string; // Note: GitHub API uses 'avatar_url'
    email?: string; // Email is optional as not all profiles may have it
    html_url: string; // Link to the candidate's GitHub profile
    company?: string; // Company is also optional
}

// {
//     "login": "ivey",
//     "id": 6,
//     "node_id": "MDQ6VXNlcjY=",
//     "avatar_url": "https://avatars.githubusercontent.com/u/6?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/ivey",
//     "html_url": "https://github.com/ivey",
//     "followers_url": "https://api.github.com/users/ivey/followers",
//     "following_url": "https://api.github.com/users/ivey/following{/other_user}",
//     "gists_url": "https://api.github.com/users/ivey/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/ivey/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/ivey/subscriptions",
//     "organizations_url": "https://api.github.com/users/ivey/orgs",
//     "repos_url": "https://api.github.com/users/ivey/repos",
//     "events_url": "https://api.github.com/users/ivey/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/ivey/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false
//   }