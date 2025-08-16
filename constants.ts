// src/constants.ts

export const dayMap: { [key: string]: number } = {
  'อาทิตย์': 1,
  'จันทร์': 2,
  'อังคาร': 3,
  'พุธ': 4,
  'พฤหัสบดี': 5,
  'ศุกร์': 6,
  'เสาร์': 7,
};

export const monthMap: { [key: string]: number } = {
  'มกราคม': 1,
  'กุมภาพันธ์': 2,
  'มีนาคม': 3,
  'เมษายน': 4,
  'พฤษภาคม': 5,
  'มิถุนายน': 6,
  'กรกฎาคม': 7,
  'สิงหาคม': 8,
  'กันยายน': 9,
  'ตุลาคม': 10,
  'พฤศจิกายน': 11,
  'ธันวาคม': 12,
};

export const zodiacMap: { [key: number]: string } = {
  1: 'ชวด',
  2: 'ฉลู',
  3: 'ขาล',
  4: 'เถาะ',
  5: 'มะโรง',
  6: 'มะเส็ง',
  7: 'มะเมีย',
  8: 'มะแม',
  9: 'วอก',
  10: 'ระกา',
  11: 'จอ',
  12: 'กุน',
};

export const numMap: { [key: number]: string } = {
  1: '๑',
  2: '๒',
  3: '๓',
  4: '๔',
  5: '๕',
  6: '๖',
  7: '๗',
  8: '๘',
  9: '๙',
  0: '๐',
};

/**
 * Calculates the Chinese Zodiac sign based on the Buddhist year.
 * @param {number} buddhistYear
 * @returns {string} The Thai zodiac sign name.
 */
export function getZodiacSign(buddhistYear: number): string {
  // Convert Buddhist year to Gregorian year
  const gregorianYear = buddhistYear - 543;
  // Use a known offset to correctly map Gregorian years to the zodiac cycle
  const zodiacIndex = (gregorianYear - 3) % 12;
  const normalizedIndex = (zodiacIndex === 0) ? 12 : zodiacIndex;
  return zodiacMap[normalizedIndex] || '';
}
