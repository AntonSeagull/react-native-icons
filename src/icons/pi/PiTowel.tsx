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

export const PiTowel = (props: IconProps) => {
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
        <Path d="M200 24H72a24 24 0 0 0-24 24v168a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V48a8 8 0 0 1 16 0v104a8 8 0 0 0 16 0V48a24 24 0 0 0-24-24M72 40h105.37a23.8 23.8 0 0 0-1.37 8v136H64V48a8 8 0 0 1 8-8m-8 176v-16h112v16Z" />
      </G>
    </Svg>
  );
};