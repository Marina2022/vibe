export const nextQualList: Record<string, string> = {
  'Beginner I': 'Beginner II',
  'Beginner II': 'Beginner Max',
  'Beginner Max': 'Ambassador I',
  'Ambassador I': 'Ambassador II',
  'Ambassador II': 'Ambassador Pro',
  'Ambassador Pro': 'Master I',
  'Master I': 'Master II',
  'Master II': 'Grand Master',
  'Grand Master': 'Leader I',
  'Leader I': 'Leader II',
  'Leader II': 'Premier Leader',
  'Premier Leader': 'Mentor I',
  'Mentor I': 'Mentor II',
  'Mentor II': 'Global Mentor'
};



export const qualInfoList = [
  { name: 'Beginner I', nlo: 0, active: 0, branch: 0, branch_go: 0 },
  { name: 'Beginner II', nlo: 45, active: 1, branch: 0, branch_go: 0 },
  { name: 'Beginner Max', nlo: 90, active: 2, branch: 1, branch_go: 90 },
  { name: 'Ambassador I', nlo: 150, active: 3, branch: 1, branch_go: 300 },
  { name: 'Ambassador II', nlo: 250, active: 4, branch: 2, branch_go: 500 },
  { name: 'Ambassador Pro', nlo: 400, active: 5, branch: 2, branch_go: 1200 },
  { name: 'Master I', nlo: 600, active: 6, branch: 3, branch_go: 2400 },
  { name: 'Master II', nlo: 800, active: 7, branch: 3, branch_go: 7000 },
  { name: 'Grand Master', nlo: 1200, active: 8, branch: 4, branch_go: 7000 },
  { name: 'Leader I', nlo: 2000, active: 8, branch: 4, branch_go: 12000 },
  { name: 'Leader II', nlo: 3000, active: 8, branch: 4, branch_go: 20000 },
  { name: 'Premier Leader', nlo: 3000, active: 8, branch: 5, branch_go: 20000 },
  { name: 'Mentor I', nlo: 3000, active: 8, branch: 5, branch_go: 35000 },
  { name: 'Mentor II', nlo: 3000, active: 8, branch: 5, branch_go: 60000 },
  { name: 'Global Mentor', nlo: 3000, active: 8, branch: 5, branch_go: 100000 },
];


export const qualCardColor: Record<string, string> = {
  'Beginner I': 'purple',
  'Beginner II': 'purple',
  'Beginner Max': 'purple',
  'Ambassador I': 'pink',
  'Ambassador II': 'pink',
  'Ambassador Pro': 'pink',
  'Master I': 'orange',
  'Master II': 'orange',
  'Grand Master': 'orange',
  'Leader I': 'green',
  'Leader II': 'green',
  'Premier Leader': 'green',
  'Mentor I': 'blue',
  'Mentor II': 'blue',
  'Global Mentor': 'blue'
};

export const abbrQualList: Record<string, string> = {
  'Beginner I': 'B1',
  'Beginner II': 'B2',
  'Beginner Max': 'BM',
  'Ambassador I': 'A1',
  'Ambassador II': 'A2',
  'Ambassador Pro': 'AP',
  'Master I': 'M1',
  'Master II': 'M2',
  'Grand Master': 'GM',
  'Leader I': 'L1',
  'Leader II': 'L2',
  'Premier Leader': 'PL',
  'Mentor I': 'MR1',
  'Mentor II': 'MR2',
  'Global Mentor': 'GLM',
};