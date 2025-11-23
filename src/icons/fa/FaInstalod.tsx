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

export const FaInstalod = (props: IconProps) => {
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
        <Path d="M153.384 480h233.729l115.441-204.235-298.325 57.446Zm351.342-239.922L387.113 32H155.669L360.23 267.9ZM124.386 48.809 7.274 256l115.962 205.154 102.391-295.593Z" />
      </G>
    </Svg>
  );
};