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

export const PiHandTapLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M58 76a58 58 0 0 1 116 0 6 6 0 0 1-12 0 46 46 0 0 0-92 0 6 6 0 0 1-12 0m138 46a25.87 25.87 0 0 0-14.59 4.49A26 26 0 0 0 142 110.1V76a26 26 0 0 0-52 0v87l-7.53-12.1a26 26 0 0 0-45 26.13l29.32 50A6 6 0 0 0 77.16 221l-29.29-50a14 14 0 0 1 24.25-14 1 1 0 0 0 .1.17l18.68 30A6 6 0 0 0 102 184V76a14 14 0 0 1 28 0v68a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0v20a6 6 0 0 0 12 0v-4a14 14 0 0 1 28 0v36c0 22.13-7.3 37.18-7.37 37.32a6 6 0 0 0 2.69 8 5.8 5.8 0 0 0 2.68.68 6 6 0 0 0 5.38-3.32c.35-.7 8.63-17.55 8.63-42.68v-36A26 26 0 0 0 196 122" />
      </G>
    </Svg>
  );
};