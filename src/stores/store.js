import {defineStore} from "pinia";
import Github from "../api.js";
import {ref} from "vue";

export const useStore = defineStore('store', () => {
    const foundStore = ref([]);

    const getAndFoundProjects = async (searchText) => {
        try {
            const response = await Github.getProjects(searchText);
            foundStore.value = response.items;
           return foundStore.value

        } catch (error) {
            console.log(error);
        }

    }
    return {
        foundStore,
        getAndFoundProjects
    }
})

