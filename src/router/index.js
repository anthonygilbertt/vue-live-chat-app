import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
import { projectAuth } from '../firebase/config'


const routes = [{
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: (to, from, next) => {
        // to:  the component of the route that we are going to
        // from: the route we are coming from
        // next:  CB function- Allows user to access the route
        //          or redirects them

        let user = projectAuth.currentUser

        if (user) {
            next({ name: 'Chatroom' }) //this allows the user access
        } else {

            next() //this allows the user access
        }
        /*
        Now, we register the auth guard inside of a route,
            we are going to go with /chatroom
        */
    }
},
{
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: (to, from, next) => {
        // to:  the component of the route that we are going to
        // from: the route we are coming from
        // next:  CB function- Allows user to access the route
        //          or redirects them

        /*
        First, we determine the current user,
            to do so, we can use projectAuth.
         */
        let user = projectAuth.currentUser
        console.log('current user in auth guard ', user);
        if (!user) {
            next({ name: 'Welcome' }) //this allows the user access
        } else {

            next() //this allows the user access
        }
        /*
        Now, we register the auth guard inside of a route,
            we are going to go with /chatroom
        */
    }
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router