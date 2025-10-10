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
        "d": "M4 6.28v11.44a1 1 0 0 0 1.243 .97l6 -1.5a1 1 0 0 0 .757 -.97v-8.44a1 1 0 0 0 -.757 -.97l-6 -1.5a1 1 0 0 0 -1.243 .97z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 6v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12h-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 7l-3 5h4l-3 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
