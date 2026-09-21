import type { Component } from 'vue'

import Post20260712KoreaPhotos2026 from '@/components/posts/Post20260712KoreaPhotos2026.vue'
import Post20250629KoreaPhotos2025 from '@/components/posts/Post20250629KoreaPhotos2025.vue'
import Post20250305O1 from '@/components/posts/Post20250305O1.vue'
import Post20251130BLR from '@/components/posts/Post20251130BLR.vue'
import Post20260315Sydeny from '@/components/posts/Post20260315Sydeny.vue'
import Post20251220Melb from '@/components/posts/Post20251220Melb.vue'

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
    name: 'Korea Photos 2026',
    date: new Date('2026/06/17'),
    body: Post20260712KoreaPhotos2026,
  },
  {
    name: 'Sydney Photos 2026',
    date: new Date('2026/03/15'),
    body: Post20260315Sydeny,
  },
  {
    name: 'Melbourne Photos 2025',
    date: new Date('2025/12/20'),
    body: Post20251220Melb,
  },

  {
    name: 'Bengaluru Photos 2025',
    date: new Date('2025/11/12'),
    body: Post20251130BLR,
  },
  {
    name: 'Korea Photos 2025',
    date: new Date('2025/06/29'),
    body: Post20250629KoreaPhotos2025,
  },
  {
    name: 'O(1) sorting',
    date: new Date('2025/03/01'),
    body: Post20250305O1,
  },
]
