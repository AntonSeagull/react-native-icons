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
        "d": "M480,265H232V444l248,36V265Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M216,265H32V415l184,26.7V265Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M480,32,232,67.4V249H480V32Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M216,69.7,32,96V249H216V69.7Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
