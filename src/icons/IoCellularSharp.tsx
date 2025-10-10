import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M496,432H400V80h96Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M368,432H272V160h96Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M240,432H144V224h96Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M112,432H16V288h96Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
