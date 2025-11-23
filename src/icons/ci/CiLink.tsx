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

export const CiLink = (props: IconProps) => {
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
        <Path d="M10.9 8a4 4 0 0 1 1.352.135 2.511 2.511 0 0 1-.7 4.863.5.5 0 0 0 0 1 3.508 3.508 0 0 0 2.944-5.2A3.56 3.56 0 0 0 11.434 7H5.59a3.5 3.5 0 0 0-.19 7c.724.041 1.458 0 2.183 0a.5.5 0 0 0 0-1c-1.323 0-2.915.262-3.891-.843A2.522 2.522 0 0 1 5.59 8Z" />
        <Path d="M18.41 17a3.5 3.5 0 0 0 .192-6.994c-.724-.041-1.458 0-2.183 0a.5.5 0 0 0 0 1c1.323 0 2.915-.262 3.891.843A2.522 2.522 0 0 1 18.41 16H13.1a4 4 0 0 1-1.352-.135 2.511 2.511 0 0 1 .7-4.863.5.5 0 0 0 0-1 3.508 3.508 0 0 0-2.944 5.2A3.56 3.56 0 0 0 12.566 17Z" />
      </G>
    </Svg>
  );
};