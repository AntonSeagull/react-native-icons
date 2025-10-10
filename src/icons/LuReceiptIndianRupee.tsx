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
        "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 7h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17.5 8 15h1a4 4 0 0 0 0-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 11h8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
