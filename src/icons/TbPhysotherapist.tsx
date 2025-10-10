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
        "d": "M9 15l-1 -3l4 -2l4 1h3.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 6m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17v-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 20h7l1 -4l4 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 20h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
