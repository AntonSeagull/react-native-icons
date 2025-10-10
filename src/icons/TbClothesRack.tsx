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
        "d": "M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 21h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.757 9.243a6 6 0 0 0 8.486 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
