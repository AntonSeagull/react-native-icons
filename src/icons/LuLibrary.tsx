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
        "d": "m16 6 4 14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 6v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 8v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 4v16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
