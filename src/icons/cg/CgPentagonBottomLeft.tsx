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

export const CgPentagonBottomLeft = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M13.33 9.232 10 5l-5 8.66 3.33 4.232 5.33.768 5-8.66zm2.121 2.326-3.198-.46-1.998-2.54-2.846 4.93 1.998 2.539 3.198.46z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};