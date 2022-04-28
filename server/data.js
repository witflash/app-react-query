const pages = [
  {
    id: 0,
    type: 'page',
    name: 'Page One',
    description: 'Some description for Page One',
    contentBlocks: [0, 1],
  },
  {
    id: 1,
    type: 'page',
    name: 'Page Two',
    description: 'Some description for Page Two',
    contentBlocks: [1, 2],
  },
  {
    id: 2,
    type: 'page',
    name: 'Page Tree',
    description: 'Some description for Page Three',
    contentBlocks: [2, 0],
  },
];

const contentBlocks = [
  {
    id: 0,
    type: 'contentBlock',
    title: 'Some content title 1',
    body: '<div><p>Some text 1</p><p>Another text 1</p></div>',
  },
  {
    id: 1,
    type: 'contentBlock',
    title: 'Some content title 2',
    body: '<div><p>Some text 2</p><p>Another text 2</p></div>',
  },
  {
    id: 2,
    type: 'contentBlock',
    title: 'Some content title 3',
    body: '<div><p>Some text 3</p><p>Another text 3</p></div>',
  },
];

module.exports = {
  pages,
  contentBlocks,
};
