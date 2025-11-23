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

export const TfiZoomIn = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m16.604 15.896-5.173-5.173A6.47 6.47 0 0 0 13 6.5C13 2.916 10.084 0 6.5 0a6.46 6.46 0 0 0-4.597 1.904A6.45 6.45 0 0 0 0 6.5C0 10.084 2.916 13 6.5 13a6.47 6.47 0 0 0 4.224-1.569l5.173 5.173zM6.5 12A5.506 5.506 0 0 1 1 6.5c0-1.47.571-2.851 1.61-3.89A5.47 5.47 0 0 1 6.5 1C9.533 1 12 3.467 12 6.5S9.533 12 6.5 12M7 6h2v1H7v2H6V7H4V6h2V4h1z" />
      </G>
    </Svg>
  );
};