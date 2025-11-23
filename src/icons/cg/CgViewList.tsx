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

export const CgViewList = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm2 2H5a1 1 0 0 0-1 1v1h3zm2 0v2h11V8a1 1 0 0 0-1-1zm-2 4H4v2h3zm2 2v-2h11v2zm-2 2H4v1a1 1 0 0 0 1 1h2zm2 2v-2h11v1a1 1 0 0 1-1 1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};