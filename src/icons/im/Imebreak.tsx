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

export const ImeBreak = (props: IconProps) => {
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
        <Path d="M0 8h2v1H0zm3 0h3v1H3zm4 0h2v1H7zm3 0h3v1h-3zm4 0h2v1h-2zm-.25-8L14 7H2l.25-7h.5L3 6h10l.25-6zM2.25 16 2 10h12l-.25 6h-.5L13 11H3l-.25 5z" />
      </G>
    </Svg>
  );
};