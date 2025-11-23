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

export const CgCommunity = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12 17.456a6 6 0 1 1 0-10.912 6 6 0 1 1 0 10.912m-2-1.487a4 4 0 1 1 0-7.938A5.98 5.98 0 0 0 8.5 12c0 1.522.567 2.911 1.5 3.969m4-7.938q.245-.03.5-.031a4 4 0 1 1-.5 7.969A5.98 5.98 0 0 0 15.5 12 5.98 5.98 0 0 0 14 8.031m-2 .846c.915.733 1.5 1.86 1.5 3.123s-.585 2.39-1.5 3.123A4 4 0 0 1 10.5 12c0-1.263.585-2.39 1.5-3.123" clipRule="evenodd" />
      </G>
    </Svg>
  );
};