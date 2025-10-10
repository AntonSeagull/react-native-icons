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
        "d": "M8 22h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 10h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
