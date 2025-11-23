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

export const PiPasswordBold = (props: IconProps) => {
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
        <Path d="M48 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0m86.73 50.7L120 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52 9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52 14.72-4.79a12 12 0 1 0-7.41-22.82m115.12 7.7a12 12 0 0 0-15.12-7.7L220 111.48V96a12 12 0 0 0-24 0v15.48l-14.73-4.78a12 12 0 1 0-7.41 22.82l14.72 4.79-9.1 12.52a12 12 0 1 0 19.42 14.11l9.1-12.52 9.1 12.52a12 12 0 1 0 19.42-14.11l-9.1-12.52 14.72-4.79a12 12 0 0 0 7.71-15.12" />
      </G>
    </Svg>
  );
};