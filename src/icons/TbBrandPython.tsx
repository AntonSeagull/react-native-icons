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
        "d": "M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 6l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 18l0 .01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
