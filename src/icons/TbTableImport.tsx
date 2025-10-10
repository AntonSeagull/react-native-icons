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
        "d": "M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 10h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 3v18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 22v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 19l-3 -3l-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
