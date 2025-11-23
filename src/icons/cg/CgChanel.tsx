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

export const CgChanel = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M6.072 3.173a9 9 0 0 0-4.608 2.463l2.13 2.13a5.99 5.99 0 0 1 5.701-1.571 9 9 0 0 0 0 11.61 5.99 5.99 0 0 1-5.702-1.57l-2.13 2.129A9 9 0 0 0 12 19.974a9 9 0 0 0 10.536-1.61l-2.13-2.13a5.99 5.99 0 0 1-5.701 1.571A9 9 0 0 0 16.828 12a9 9 0 0 0-2.123-5.805 5.99 5.99 0 0 1 5.702 1.57l2.13-2.129A9 9 0 0 0 12 4.026a9 9 0 0 0-5.928-.853M12 7.705a5.99 5.99 0 0 0-.806 7.622q.354.529.806.968a5.987 5.987 0 0 0 0-8.59" clipRule="evenodd" />
      </G>
    </Svg>
  );
};