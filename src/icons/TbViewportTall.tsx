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
        "d": "M12 10v-7l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 6l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14v7l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 3h-1a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
