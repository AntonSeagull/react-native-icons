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

export const VscNotebook = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m2 2 1-1h9l1 1v12l-1 1H3l-1-1zm1 0v12h9V2zm1 2 1-1h5l1 1v1l-1 1H5L4 5zm1 0v1h5V4zm10 1h-1v2h1zm-1 3h1v2h-1zm1 3h-1v2h1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};