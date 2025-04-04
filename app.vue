<template>
    <AppLayout>
      <NuxtPage />
    </AppLayout>
  </template>
  
  <style>
  html {
    font-family: $dt('font.sans');
  }
  </style>
  <script setup>
  import { useHead } from '@vueuse/head'

  const { post } = defineProps({
    post: {
      type: Object,
      required: true,
    },
  });

  useHead({
    title: post.title,
    meta: [
      { property: 'og:url', content: `https://your-website.com/posts/${post.slug}` }, // Replace with your actual URL
      { property: 'og:title', content: post.title },
      { property: 'og:description', content: post.content },
      { property: 'og:image', content: post.imageUrl },
      { property: 'og:image:alt', content: post.title },
      { property: 'og:site_name', content: 'Your Website Name' }, // Replace with your website name
    ]
  });
  </script>