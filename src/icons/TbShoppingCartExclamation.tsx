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
        "d": "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 17h-9v-14h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 5l14 1l-.854 5.976m-2.646 1.024h-10.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 22v.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
