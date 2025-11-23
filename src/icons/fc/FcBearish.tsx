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

export const FcBearish = (props: IconProps) => {
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
        <Path d="M40 34h4v10h-4zM34 29h4v15h-4zM28 33h4v11h-4zM22 25h4v19h-4zM16 28h4v16h-4zM10 24h4v20h-4zM4 19h4v25H4z" />
        <Path d="m34 13.2-4 4-10-10-5 5-7.6-7.6-2.8 2.8L15 17.8l5-5 10 10 4-4 6.1 6.1 2.8-2.8z" />
        <Path d="M44 26h-9l9-9z" />
      </G>
    </Svg>
  );
};