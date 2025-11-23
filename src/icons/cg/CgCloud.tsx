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

export const CgCloud = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M14.738 19.996q.12.004.243.004A8 8 0 1 0 8.735 7H7.52a6.5 6.5 0 0 0 0 13h7q.11 0 .219-.004m1.953-2.275c2.35-.769 4.29-3.04 4.29-5.721a6 6 0 0 0-12 0h-2c0-1.06.206-2.074.581-3H7.52a4.5 4.5 0 1 0 0 9h7c.55 0 1.385-.099 2.172-.279" clipRule="evenodd" />
      </G>
    </Svg>
  );
};