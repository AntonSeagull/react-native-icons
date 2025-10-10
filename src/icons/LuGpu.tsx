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
        "d": "M2 21V3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
