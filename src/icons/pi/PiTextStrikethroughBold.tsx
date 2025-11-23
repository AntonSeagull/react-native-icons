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

export const PiTextStrikethroughBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M228 128a12 12 0 0 1-12 12h-30.14A41.48 41.48 0 0 1 196 168c0 14.45-7.81 28.32-21.43 38.05C162 215.05 145.44 220 128 220s-34-4.95-46.57-13.95C67.81 196.32 60 182.45 60 168a12 12 0 0 1 24 0c0 15.18 20.15 28 44 28s44-12.82 44-28c0-12.76-9.3-20.18-35.35-28H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M75.11 100a12 12 0 0 0 12-12c0-16 17.58-28 40.89-28 17.36 0 31.37 6.65 37.48 17.78a12 12 0 0 0 21-11.56C176.13 47.3 154.25 36 128 36c-37 0-64.89 22.35-64.89 52a12 12 0 0 0 12 12" />
      </G>
    </Svg>
  );
};