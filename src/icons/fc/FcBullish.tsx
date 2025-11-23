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

export const FcBullish = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M40 21h4v23h-4zM34 28h4v16h-4zM28 23h4v21h-4zM22 29h4v15h-4zM16 32h4v12h-4zM10 30h4v14h-4zM4 34h4v10H4z" />
        <Path d="M40.1 9.1 34 15.2l-4-4-10 10-5-5L4.6 26.6l2.8 2.8 7.6-7.6 5 5 10-10 4 4 8.9-8.9z" />
        <Path d="M44 8h-9l9 9z" />
      </G>
    </Svg>
  );
};