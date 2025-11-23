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

export const PiSlidersLight = (props: IconProps) => {
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
        <Path d="M62 106.6V40a6 6 0 0 0-12 0v66.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-50.6a30 30 0 0 0 0-58.8M56 154a18 18 0 1 1 18-18 18 18 0 0 1-18 18m78-95.4V40a6 6 0 0 0-12 0v18.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-98.6a30 30 0 0 0 0-58.8m-6 47.4a18 18 0 1 1 18-18 18 18 0 0 1-18 18m102 62a30.05 30.05 0 0 0-24-29.4V40a6 6 0 0 0-12 0v98.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-18.6a30.05 30.05 0 0 0 24-29.4m-30 18a18 18 0 1 1 18-18 18 18 0 0 1-18 18" />
      </G>
    </Svg>
  );
};