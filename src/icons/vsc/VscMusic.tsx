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

export const VscMusic = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M14 7h-1v2.5a2.5 2.5 0 1 0 1 2zm-2.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" clipRule="evenodd" />
        <Path fillRule="evenodd" d="m13.469 2.001-8 .5L5 3v7.5a2.5 2.5 0 1 0 1 2V6.47l7-.438V7h1V2.5zM13 3.032V5.03l-7 .438V3.47zM3.5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" clipRule="evenodd" />
      </G>
    </Svg>
  );
};