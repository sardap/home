import type { Component } from 'vue'

import Post20250629KoreaPhotos2025 from '@/components/posts/Post20250629KoreaPhotos2025.vue'
import Post20250305O1 from '@/components/posts/Post20250305O1.vue'

export interface Post {
  name: string
  date: Date
  body: Component
}

export function getPost(name: string): Post | null {
  for (const post of posts) {
    if (postLink(post) == name.toLowerCase()) {
      return post
    }
  }

  return null
}

export function postLink(post: Post): string {
  return encodeURIComponent(
    post.date.getUTCFullYear() +
      '_' +
      post.date.getUTCMonth() +
      '_' +
      post.date.getUTCDay() +
      '_' +
      post.name.replace(/ /g, '_').toLowerCase(),
  )
}

export const posts: Post[] = [
  {
    name: 'Korea Photos 2025',
    date: new Date('2025/06/29'),
    body: Post20250629KoreaPhotos2025,
  },
  {
    name: 'O1 sorting',
    date: new Date('2025/03/01'),
    body: Post20250305O1,
  },
]
