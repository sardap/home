import { Platform, Tag } from './consts'

export interface PlatformEntry {
  platform: Platform
  downloadLink?: String
}

export interface GameInfo {
  title: string
  repo: string
  link: string
  platforms: PlatformEntry[]
  tags: Tag[]
}

export const WalkGoodMaybe: GameInfo = {
  title: 'Walk Good Maybe',
  repo: 'https://github.com/sardap/walk-good-maybe',
  link: 'walk-good-maybe',
  platforms: [
    { platform: Platform.Web },
    {
      platform: Platform.GameBoyAdvance,
      downloadLink:
        'https://github.com/sardap/walk-good-maybe/releases/download/v1.1.3/walk-good-maybe.gba'
    }
  ],
  tags: [Tag.Complete]
}

export const UltimateChess2024: GameInfo = {
  title: 'Ultimate Chess 2024',
  repo: 'https://github.com/sardap/ultimate-chess-2024',
  link: 'ultimate-chess-2024',
  platforms: [
    { platform: Platform.Web },
    {
      platform: Platform.Linux,
      downloadLink:
        'https://github.com/sardap/ultimate-chess-2024/releases/download/v1.0.0/linux.zip'
    },
    {
      platform: Platform.Windows,
      downloadLink:
        'https://github.com/sardap/ultimate-chess-2024/releases/download/v1.0.0/windows.zip'
    }
  ],
  tags: [Tag.Complete]
}

export const NoTouchyFace: GameInfo = {
  title: 'No Touchy Face',
  repo: 'https://github.com/sardap/HackathonThing',
  link: 'no-touchy-my-facey',
  platforms: [
    {
      platform: Platform.Web
    },
    {
      platform: Platform.Linux,
      downloadLink: 'https://github.com/sardap/HackathonThing/releases/download/1.0.0/linux.zip'
    },
    {
      platform: Platform.Windows,
      downloadLink: 'https://github.com/sardap/HackathonThing/releases/download/1.0.0/windows.zip'
    },
    {
      platform: Platform.MacOs,
      downloadLink: 'https://github.com/sardap/HackathonThing/releases/download/1.0.0/apple.zip'
    }
  ],
  tags: [Tag.Complete]
}

export const StopTheMail: GameInfo = {
  title: 'Stop The Mail',
  repo: 'https://github.com/sardap/stop-the-mail',
  link: 'stop-the-mail',
  platforms: [
    {
      platform: Platform.Web
    },
    {
      platform: Platform.DS,
      downloadLink:
        'https://github.com/sardap/stop-the-mail/releases/download/v0.2.0/stop-the-mail.nds'
    }
  ],
  tags: [Tag.CompleteShit]
}

export const WeddingPlanner: GameInfo = {
  title: 'Wedding Planner',
  repo: 'https://github.com/sardap/wedding-planner',
  link: 'wedding-planner',
  platforms: [
    { platform: Platform.Web },
    {
      platform: Platform.Linux,
      downloadLink:
        'https://github.com/sardap/wedding-planner/releases/download/1.0.0/wedding_planner_linux'
    },
    {
      platform: Platform.Windows,
      downloadLink:
        'https://github.com/sardap/wedding-planner/releases/download/1.0.0/wedding_planner_windows.exe'
    }
  ],
  tags: [Tag.Complete, Tag.MobileFriendly]
}

export const Voties: GameInfo = {
  title: 'Voties',
  repo: 'https://github.com/sardap/voties',
  link: 'voties',
  platforms: [{ platform: Platform.Web }],
  tags: []
}
