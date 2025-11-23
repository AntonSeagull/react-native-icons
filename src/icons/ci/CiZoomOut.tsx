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

export const CiZoomOut = (props: IconProps) => {
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
        <Path d="M16.279 17.039a7.93 7.93 0 0 1-5.206 1.941 7.964 7.964 0 0 1-7.96-7.96 7.964 7.964 0 0 1 7.96-7.96 7.964 7.964 0 0 1 7.96 7.96 7.93 7.93 0 0 1-2.04 5.319l.165.165 3.583 3.582c.455.456-.252 1.163-.707.708zm1.754-6.019a6.964 6.964 0 0 0-6.96-6.96 6.963 6.963 0 0 0-6.96 6.96 6.963 6.963 0 0 0 6.96 6.96 6.964 6.964 0 0 0 6.96-6.96m-4.96-.5c.645 0 .643 1 0 1h-4c-.645 0-.643-1 0-1z" />
      </G>
    </Svg>
  );
};