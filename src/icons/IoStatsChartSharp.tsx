import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M128,496H48V304h80Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M352,496H272V208h80Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M464,496H384V96h80Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M240,496H160V16h80Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
