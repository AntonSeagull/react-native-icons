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
        "d": "M2 3h20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m7 21 5-5 5 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
