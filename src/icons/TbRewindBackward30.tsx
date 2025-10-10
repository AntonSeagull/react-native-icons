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
        "d": "M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 14h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 9l-3 -3l3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
