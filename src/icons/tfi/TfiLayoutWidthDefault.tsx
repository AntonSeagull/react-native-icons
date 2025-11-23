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

export const TfiLayoutWidthDefault = (props: IconProps) => {
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
        <Path d="M0 0v17h17V0zm16 16H1V1h15zM3 8h1v1H3zm0-4h1v1H3zm0 6h1v1H3zm0-4h1v1H3zm0-4h1v1H3zm0 12h1v1H3zm0-2h1v1H3zM13 2h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zm0 4h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1z" />
      </G>
    </Svg>
  );
};