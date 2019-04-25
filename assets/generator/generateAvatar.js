const accessories = [
  'Blank',
  'Kurt',
  'Prescription01',
  'Prescription02',
  'Round',
  'Sunglasses',
  'Wayfarers'
];
const clothes = [
  'BlazerShirt',
  'BlazerSweater',
  'CollarSweater',
  'GraphicShirt',
  'Graphics',
  'Hoodie',
  'Overall',
  'ShirtCrewNeck',
  'ShirtScoopNeck',
  'ShirtVNeck'
];
const clothesColor = [
  'Black',
  'Blue01',
  'Blue02',
  'Blue03',
  'Gray01',
  'Gray02',
  'Heather',
  'PastelBlue',
  'PastelGreen',
  'PastelOrange',
  'PastelRed',
  'PastelYellow',
  'Pink',
  'Red',
  'White'
];
const clothesGraphic = [
  'Skull',
  'SkullOutline',
  'Bat',
  'Cumbia',
  'Deer',
  'Diamond',
  'Hola',
  'Selena',
  'Pizza',
  'Resist',
  'Bear'
];
const eyebrows = [
  'Angry',
  'AngryNatural',
  'Default',
  'DefaultNatural',
  'FlatNatural',
  'FrownNatural',
  'RaisedExcited',
  'RaisedExcitedNatural',
  'SadConcerned',
  'SadConcernedNatural',
  'UnibrowNatural',
  'UpDown',
  'UpDownNatural'
];
const eyes = [
  'Close',
  'Cry',
  'Default',
  'Dizzy',
  'EyeRoll',
  'Happy',
  'Hearts',
  'Side',
  'Squint',
  'Surprised',
  'Wink',
  'WinkWacky'
];
const facialHair = [
  'BeardLight',
  'BeardMagestic',
  'BeardMedium',
  'Blank',
  'MoustacheFancy',
  'MoustacheMagnum'
];
const facialHairColors = [
  'Auburn',
  'Black',
  'Blonde',
  'BlondeGolden',
  'Brown',
  'BrownDark',
  'Platinum',
  'Red'
];
const hairColors = [
  'Auburn',
  'Black',
  'Blonde',
  'BlondeGolden',
  'Brown',
  'BrownDark',
  'PastelPink',
  'Platinum',
  'Red',
  'SilverGray'
];
const hatColors = [
  'Black',
  'Blue01',
  'Blue02',
  'Blue03',
  'Gray01',
  'Gray02',
  'Heather',
  'PastelBlue',
  'PastelGreen',
  'PastelOrange',
  'PastelRed',
  'PastelYellow',
  'Pink',
  'Red',
  'White'
];
const mouth = [
  'Concerned',
  'Default',
  'Disbelief',
  'Eating',
  'Grimace',
  'Sad',
  'ScreamOpen',
  'Serious',
  'Smile',
  'Tongue',
  'Twinkle',
  'Vomit'
];
const skin = [
  'Tanned',
  'Yellow',
  'Pale',
  'Light',
  'Brown',
  'DarkBrown',
  'Black'
];
const topp = [
  'Eyepatch',
  'Hat',
  'Hijab',
  'LongHairBigHair',
  'LongHairBob',
  'LongHairBun',
  'LongHairCurly',
  'LongHairCurvy',
  'LongHairDreads',
  'LongHairFrida',
  'LongHairFro',
  'LongHairFroBand',
  'LongHairMiaWallace',
  'LongHairNotTooLong',
  'LongHairShavedSides',
  'LongHairStraight',
  'LongHairStraight2',
  'LongHairStraightStrand',
  'NoHair',
  'ShortHairDreads01',
  'ShortHairDreads02',
  'ShortHairFrizzle',
  'ShortHairShaggy',
  'ShortHairShaggyMullet',
  'ShortHairShortCurly',
  'ShortHairShortFlat',
  'ShortHairShortRound',
  'ShortHairShortWaved',
  'ShortHairSides',
  'ShortHairTheCaesar',
  'ShortHairTheCaesarSidePart',
  'Turban',
  'WinterHat1',
  'WinterHat2',
  'WinterHat3',
  'WinterHat4'
];

const getRandom = (length) => {
  return Math.floor(Math.random() * length)
}

const generateRandomAvatar = (avatarType) => {
  const accessory = accessories[getRandom(accessories.length)]
  const facialHairStyle = facialHair[getRandom(facialHair.length)]
  const facialHairColor = facialHairColors[getRandom(facialHairColors.length)]
  const hatColor = hatColors[getRandom(hatColors.length)]
  const hairColor = hairColors[getRandom(hairColors.length)]
  const clothingColor = clothesColor[getRandom(clothesColor.length)]
  const clothingGraphic = clothesGraphic[getRandom(clothesGraphic.length)]
  const clothing = clothes[getRandom(clothes.length)]
  const eyebrow = eyebrows[getRandom(eyebrows.length)]
  const eyesStyle = eyes[getRandom(eyes.length)]
  const mouthStyle = mouth[getRandom(mouth.length)]
  const skinStyle = skin[getRandom(skin.length)]
  const topStyle = topp[getRandom(topp.length)]

  let avatarStyle = 'Transparent'
  if (Math.floor(Math.random() * 2) === 1) {
    avatarStyle = 'Circle'
  }

  return `https://avataaars.io/?avatarStyle=${avatarType || avatarStyle}&topType=${topStyle}&accessoriesType=${accessory}&hairColor=${hairColor}&hatColor=${hatColor}&facialHairType=${facialHairStyle}&facialHairColor=${facialHairColor}&clotheType=${clothing}&clotheColor=${clothingColor}&graphicType=${clothingGraphic}&eyeType=${eyesStyle}&eyebrowType=${eyebrow}&mouthType=${mouthStyle}&skinColor=${skinStyle}`
}

console.log(generateRandomAvatar());
