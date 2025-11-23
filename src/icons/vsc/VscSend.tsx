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

export const VscSend = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m1 1.91.78-.41L15 7.449v.95L1.78 14.33 1 13.91 2.583 8zM3.612 8.5 2.33 13.13 13.5 7.9 2.33 2.839l1.282 4.6L9 7.5v1z" />
      </G>
    </Svg>
  );
};