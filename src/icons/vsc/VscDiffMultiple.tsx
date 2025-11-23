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

export const VscDiffMultiple = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="m9.71 1.29 3 3L13 5v9l-1 1H3l-1-1V2l1-1h6zM3 14h9V5L9 2H3zm4-8H5v1h2v2h1V7h2V6H8V4H7zm-2 5h5v1H5z" clipRule="evenodd" />
        <Path d="m12.42 1 2.29 2.29L15 4v10l-1 1V4l-3-3z" />
      </G>
    </Svg>
  );
};