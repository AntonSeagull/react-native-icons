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
        "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 21-9-9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15v6h-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
