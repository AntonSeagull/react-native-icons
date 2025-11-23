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

export const SiVoipdotms = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17.51 2.372c-.946 0-1.877.24-2.71.696a5.7 5.7 0 0 0-2.055 1.92l-5.177 8.047c-.928 1.446-3.076 1.656-3.92.943l4.051 6.343c.258.402.611.731 1.027.96a2.81 2.81 0 0 0 2.706 0 2.85 2.85 0 0 0 1.025-.96L24 2.371ZM0 8.309l2.228 3.521s.89 1.302 2.402 1.302 2.378-1.302 2.378-1.302l2.23-3.52Z" />
      </G>
    </Svg>
  );
};