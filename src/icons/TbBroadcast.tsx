import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M18.364 19.364a9 9 0 1 0 -12.728 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15.536 16.536a5 5 0 1 0 -7.072 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
