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

export const PiCaretCircleDoubleRightBold = (props: IconProps) => {
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
        <Path d="M204.4 51.6a108 108 0 1 0 0 152.8 108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84 84.12 84.12 0 0 1 .02 118.84Zm-58.93-67.91a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17-17L103 128l-23.51-23.53a12 12 0 1 1 17-17Zm56 17-32 32a12 12 0 0 1-17-17L159 128l-23.52-23.53a12 12 0 1 1 17-17l32 32a12 12 0 0 1 .03 17.02Z" />
      </G>
    </Svg>
  );
};