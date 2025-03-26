<template>

</template>
<script>
export default {
    name: 'Search',
    props: {
        searchResults: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        console.log('Search results:', this.searchResults);
    }
}
</script>