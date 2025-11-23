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

export const CgSlack = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M13 10a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0zM5 8a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm10 5a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm-5 9a2 2 0 0 1-2-2v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2M8 5a2 2 0 1 1 4 0v2h-2a2 2 0 0 1-2-2M3 15a2 2 0 1 0 4 0v-2H5a2 2 0 0 0-2 2m14 5a2 2 0 1 1-4 0v-2h2a2 2 0 0 1 2 2m5-10a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};