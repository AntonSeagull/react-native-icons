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
        "d": "M14 18a2 2 0 0 0-4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 11h20"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
