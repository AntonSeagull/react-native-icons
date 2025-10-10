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
        "d": "M240,240H32V32H240Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M480,240H272V32H480Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M240,480H32V272H240Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M480,480H272V272H480Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
