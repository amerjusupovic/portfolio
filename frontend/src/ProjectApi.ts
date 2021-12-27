const axios = require('axios');

async function getGithubProjects() {
    let data = [] as any;
    data = await axios.get("https://api.github.com/users/amerjusupovic/repos")
    .then((response: any) => {
        return response.data;
    });
    console.log(data[0]);
    return data;
}

export { getGithubProjects };