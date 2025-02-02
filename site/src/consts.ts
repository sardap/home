export const hostingSite = 'https://backend.sarda.dev/assets'
export const backendSite = 'https://backend.sarda.dev'

export interface ProjectFilter {
  technologies: Tag[]
}

export enum Platform {
  Web = 'Web',
  Linux = 'Linux',
  Windows = 'Windows',
  MacOs = 'Apple Desktop',
  GameBoyAdvance = 'Game Boy Advance',
  DS = 'DS',
}

export function platformToImage(platform: Platform) {
  switch (platform) {
    case Platform.Web:
      return '/photos/platforms/web.png'
    case Platform.Linux:
      return '/photos/platforms/linux.png'
    case Platform.Windows:
      return '/photos/platforms/windows.png'
    case Platform.MacOs:
      return '/photos/platforms/mac.png'
    case Platform.GameBoyAdvance:
      return '/photos/platforms/gba.png'
    case Platform.DS:
      return '/photos/platforms/ds.png'
  }
}

export enum Tag {
  Abaddon = 'Abaddon',
  Complete = 'Complete',
  MobileFriendly = 'Mobile friendly',
  WASM = 'WASM',
  Docker = 'Docker',
  Rest = 'Rest',
  ECS = 'Entity Component System',
  RDB = 'Relational Database',
  Diesel = 'diesel',
  Redis = 'Redis',
  Flask = 'Flask',
  GBA = 'Game Boy Advance',
  DS = 'DS',
  Unity = 'Unity',
  RestGin = 'REST (gin)',
  RestWarp = 'REST (warp)',
  SpotifyWebApi = 'Spotify web API',
  DiscordAPI = 'Discord API',
  YouTubeApi = 'YouTube API',
  OpenWeatherApi = 'OpenWeather API',
  GithubAPI = 'Github API',
  ImageGeneration = 'Image generation',
  CPP20 = 'C++ 20',
  MonoGame = 'MonoGame',
  React = 'React',
  MachineLearning = 'Machine learning',
  Jen = 'jennifer (go code gen)',
  BadgerDB = 'Badger DB',
  Computers = 'Computers',
  SwinGame = 'SwinGame',
  CurseWords = 'Curse words',
  Bevy = 'Bevy',
  Three3DS = '3DS',
}
