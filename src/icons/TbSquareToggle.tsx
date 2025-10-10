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
        "d": "M12 2l0 20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 6a2 2 0 0 0 -2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 20a2 2 0 0 0 2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 10l0 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
