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
        "d": "M3 12l3 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3l0 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.8 7.8l-2.2 -2.2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16.2 7.8l2.2 -2.2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.8 16.2l-2.2 2.2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12l9 3l-4 2l-2 4l-3 -9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
