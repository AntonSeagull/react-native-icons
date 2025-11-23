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

export const RxScissors = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M.95 4.485a1.55 1.55 0 1 0 3.1 0 1.55 1.55 0 0 0-3.1 0m1.55 2.45A2.45 2.45 0 1 1 4.773 5.4l.964.644-.02.068-.154.55-.353.236-.994-.664c-.442.433-1.048.7-1.716.7M.95 10.5a1.55 1.55 0 1 1 3.1 0 1.55 1.55 0 0 1-3.1 0M2.5 8.05a2.45 2.45 0 1 0 2.277 1.545L15 2.757l-.951.1a10 10 0 0 0-3.818 1.208l-3.075 1.71a1 1 0 0 0-.476.606l-.253.906L4.224 8.76A2.44 2.44 0 0 0 2.5 8.05m4.644 1.165.012.007 3.075 1.71a10 10 0 0 0 3.818 1.208l.951.1L8.81 8.1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};