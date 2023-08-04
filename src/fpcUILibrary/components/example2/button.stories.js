import FpcButton from './index';
// import FpcButton from '../src/button.vue';



export default {
    title: 'FPC Button',
    tags: ['autodocs'],
    component: FpcButton,

}


export const Test = () => ({
    components: { FpcButton },
    template: '<FpcButton></FpcButton>'
})