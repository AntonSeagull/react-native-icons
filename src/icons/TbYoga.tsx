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
        "d": "M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 20h4l1.5 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 20l-1 -5h-5l1 -7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 10l4 -1l4 -1l4 1.5l4 1.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
