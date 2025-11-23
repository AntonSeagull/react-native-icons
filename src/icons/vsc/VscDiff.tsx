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

export const VscDiff = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m2 3.5.5-.5h5l.5.5v9l-.5.5h-5l-.5-.5zM3 12h4V6H3zm0-7h4V4H3zm6.5-2h5l.5.5v9l-.5.5h-5l-.5-.5v-9zm.5 9h4v-2h-4zm0-4h4V4h-4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};