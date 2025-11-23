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

export const VscBriefcase = (props: IconProps) => {
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
        <Path d="M14.5 4H11V2.5l-.5-.5h-5l-.5.5V4H1.5l-.5.5v8l.5.5h13l.5-.5v-8zM6 3h4v1H6zm8 2v.76L10 8v-.5L9.51 7h-3L6 7.5V8L2 5.71V5zM9 8v1H7V8zm-7 4V6.86l4 2.29v.35l.5.5h3l.5-.5v-.31l4-2.28V12z" />
      </G>
    </Svg>
  );
};