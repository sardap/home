import { backendSite } from './consts'

const langsBlockList = [
  'Makefile',
  'Shell',
  'HLSL',
  'CSS',
  'HTML',
  'ShaderLab',
  'Dockerfile',
  'SCSS',
]

export async function getCommits(repo: string): Promise<number> {
  const response = await fetch(`${backendSite}/api/repocontr/${repo}`)
  const apiRes = await response.json()

  for (let i = 0; i < apiRes.length; i++) {
    if (apiRes[i].login === 'sardap') {
      return apiRes[i].contributions
    }
  }

  return 0
}

export interface PublicRepo {
  name: string
  created_at: string
  stargazers_count: number
}

export interface CompleteRepo {
  repo: PublicRepo
  commits: number
  langs: string[]
}

export interface Complete {
  all_battle: CompleteRepo
  'mon-fs': CompleteRepo
  'ultimate-chess-2024': CompleteRepo
  voties: CompleteRepo
  voting_systems: CompleteRepo
  kiryueverywhere: CompleteRepo
  march_good_maybe: CompleteRepo
  'stop-the-mail': CompleteRepo
  TuneNeutral: CompleteRepo
  TIGTBIFHIMVA: CompleteRepo
  'go-walk-good-maybe-hd': CompleteRepo
  'resume-site': CompleteRepo
  'walk-good-maybe': CompleteRepo
  chessbot: CompleteRepo
  pickupbot: CompleteRepo
  muhbot: CompleteRepo
  IsItSka: CompleteRepo
  vibes: CompleteRepo
  HackathonThing: CompleteRepo
  NoTotoAfrica: CompleteRepo
  'Capstone-2019-Data-Sharing': CompleteRepo
  Temptris: CompleteRepo
  ShapesCanMoveAndSpeak: CompleteRepo
  PascalBrainFuck: CompleteRepo
  NumbersOrDie: CompleteRepo
  'site-3ds': CompleteRepo
  'wedding-planner': CompleteRepo
}

export async function getComplete(): Promise<Complete> {
  const response = await fetch(`${backendSite}/api/complete`)
  const apiRes = await response.json()
  return apiRes
}
