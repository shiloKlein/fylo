<template>
    <button>
   {{msg}}
    </button>
</template>
<script>
export default {
    name: 'custom button',
    props: {
        msg: String
    }
}
</script>
