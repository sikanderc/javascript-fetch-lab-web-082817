function getIssues() {
  fetch('https://api.github.com/repos/sikanderc/javascript-fetch-lab/issues', {
    method: /get/
  }).then(res => res.json()).then(json => console.log(json));

}

function showIssues(json) {
}

function createIssue() {
  fetch('https://api.github.com/repos/sikanderc/javascript-fetch-lab/issues', {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
    },
    body: {
      title: "pretty pretty pretty rickay"
    }
  }).then(res => res.json()).then(json => console.log(json));

}

function showResults(json) {
}

function forkRepo() {
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

const token = '704114db17314e28baf3d509db3db9e00760db2d';
