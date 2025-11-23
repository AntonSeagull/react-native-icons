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

export const PiPaperPlaneFill = (props: IconProps) => {
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
        <Path d="M236.2 218.31A15.88 15.88 0 0 1 224 224a16.2 16.2 0 0 1-5.37-.92l-79.95-27a4 4 0 0 1-2.72-3.79V120a8 8 0 0 0-8.53-8 8.19 8.19 0 0 0-7.47 8.26v72a4 4 0 0 1-2.72 3.79l-79.95 27a16 16 0 0 1-19.26-22.92l95.97-168a16 16 0 0 1 27.89 0L237.9 200.1a15.89 15.89 0 0 1-1.7 18.21" />
      </G>
    </Svg>
  );
};