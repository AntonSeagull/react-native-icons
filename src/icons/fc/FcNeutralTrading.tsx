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

export const FcNeutralTrading = (props: IconProps) => {
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
        <Path d="M43.4 13 35 20V6z" />
        <Path d="M4 11h34v4H4z" />
        <Path d="M40 23h4v19h-4zM34 23h4v19h-4zM28 23h4v19h-4zM22 23h4v19h-4zM16 23h4v19h-4zM10 23h4v19h-4zM4 23h4v19H4z" />
      </G>
    </Svg>
  );
};