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
        "d": "M15 8h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19h6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
