const axios = require('axios');

async function getGithubProjects() {
    let data = [] as any;
    data = await axios.get("https://api.github.com/users/amerjusupovic/repos")
    .then((response: any) => {
        return response.data;
    });
    return data;
}

export { getGithubProjects };