const image1 = require('../assets/password-generator.PNG')
const image2 = require('../assets/todo-list.PNG')
const image3 = require('../assets/show-search.PNG')
const image4 = require('../assets/arthur.PNG')
const image5 = require('../assets/basketball.PNG')

const projects = [
    {
        id: 1,
        image: image4,
        link: 'https://arthur-street-cafe.netlify.app/',
        github: 'https://github.com/arjunp8822/arthur-street-cafe',
        title: 'Arthur Street Cafe',
        desc: 'React application build for a local cafe.',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JavaScript',
        tech4: 'React',
    },
    {
        id: 2,
        image: image2,
        link: 'https://to-do-list-ap.netlify.app/',
        github: 'https://github.com/arjunp8822/todolist-frontend',
        title: 'To-do List',
        desc: 'A full stack MERN to-do list application deployed on Render.',
        tech1: 'MongoDB',
        tech2: 'Express',
        tech3: 'React',
        tech4: 'Node',
    },
    {
        id: 3,
        image: image1,
        link: 'https://arjunp8822.github.io/password-generator/',
        github: 'https://github.com/arjunp8822/password-generator',
        title: 'Password Generator',
        desc: 'Password generator with toggles for length, numbers and symbols.',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JavaScript',
    },
    
    {
        id: 4,
        image: image3,
        link: 'https://arjunp8822.github.io/movie-search/',
        github: 'https://github.com/arjunp8822/movie-search',
        title: 'Show Searcher',
        desc: 'Very basic application which uses Axios to make API requests.',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JavaScript',
        tech4: 'Node',
    },
    {
        id: 5,
        image: image5,
        link: 'https://arjunp8822.github.io/basketball-scorecard/',
        github: 'https://github.com/arjunp8822/basketball-scorecard',
        title: 'Basketball Scorecard',
        desc: 'My first application where I learned how to put together all the basic elements.',
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JavaScript',
    }
]

export default projects