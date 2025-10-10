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
        "d": "M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12.5 11.5l-4 4l1.5 1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15l-1.5 -1.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
