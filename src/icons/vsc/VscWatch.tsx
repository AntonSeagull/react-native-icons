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

export const VscWatch = (props: IconProps) => {
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
        <Path d="M7.5 9h2V8H8V5.5H7v3z" />
        <Path fillRule="evenodd" d="M5.5 3.669A5 5 0 0 0 3 8a5 5 0 0 0 2.5 4.331V14.5l.5.5h4l.5-.5v-2.169A5 5 0 0 0 13 8a5 5 0 0 0-2.5-4.331V1.5L10 1H6l-.5.5zM12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};