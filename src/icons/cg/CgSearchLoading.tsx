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

export const CgSearchLoading = (props: IconProps) => {
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
        <Path fill="currentColor" d="M8.55 10.55a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.55 11.55a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13.55 11.55a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path fill="currentColor" fillRule="evenodd" d="M16.207 4.893a8 8 0 0 1 .662 10.565q.023.02.045.042l4.243 4.243a1 1 0 0 1-1.414 1.414L15.5 16.914l-.042-.045A8.001 8.001 0 0 1 4.893 4.893a8 8 0 0 1 11.314 0m-9.9 9.9a6 6 0 1 0 8.486-8.485 6 6 0 0 0-8.485 8.485" clipRule="evenodd" />
      </G>
    </Svg>
  );
};