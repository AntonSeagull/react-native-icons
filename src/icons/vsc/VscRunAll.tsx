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

export const VscRunAll = (props: IconProps) => {
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
        <Path d="M2.78 2 2 2.41v12l.78.42 9-6V8zM3 13.48V3.35l7.6 5.07z" />
        <Path fillRule="evenodd" d="m6 14.683 8.78-5.853V8L6 2.147V3.35l7.6 5.07L6 13.48z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};