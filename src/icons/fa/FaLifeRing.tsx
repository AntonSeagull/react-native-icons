import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const FaLifeRing = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8m173.696 119.559-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.4 218.4 0 0 1 45.255 45.255M256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96M127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.4 218.4 0 0 1 45.255-45.255M82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.4 218.4 0 0 1-45.255-45.255m302.137 45.255-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.4 218.4 0 0 1-45.255 45.255" />
      </G>
    </Svg>
  );
};