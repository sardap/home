export enum Mode {
  Normal = 'normal',
  Dog = 'dog',
  QuizTime = 'quiz-time',
  Dyslexia = 'dyslexia',
  PhraseLearner = 'phrase-learner',
  Ship = 'pauls-ship',
  RomanClock = 'roman-clock'
}

export function stringToMode(newModeStr: string) {
  newModeStr = newModeStr.toLowerCase()
  newModeStr = newModeStr.replace('mode', '')
  newModeStr = newModeStr.trim()
  let newMode = Mode.Normal
  // update mode value
  switch (newModeStr) {
    default:
      newMode = Mode.Normal
      break
    case Mode.Dog:
      newMode = Mode.Dog
      break
    case Mode.QuizTime:
      newMode = Mode.QuizTime
      break
    case Mode.PhraseLearner:
      newMode = Mode.PhraseLearner
      break
    case Mode.Ship:
      newMode = Mode.Ship
      break
    case Mode.RomanClock:
      newMode = Mode.RomanClock
      break
    case Mode.Dyslexia:
    case 'disleixa':
    case 'dyslexic':
    case 'disxleixa':
    case 'dislexia':
    case 'dsyleixa':
    case 'disxliexa':
    case 'dislxisic':
    case 'disxleisc':
    case 'dislescic':
    case 'dislexsic':
    case 'dislexic':
    case 'dislxeic':
    case 'disxlesic':
    case 'dysxlisc':
    case 'dislexixa':
    case 'dyslixila':
    case 'disyleixc':
    case 'dysleixa':
      newMode = Mode.Dyslexia
      break
  }

  return newMode
}
