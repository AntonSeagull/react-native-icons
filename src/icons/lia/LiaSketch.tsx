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

export const LiaSketch = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3.99 8.434 5.07 2.73 13.057 16 28.537l13.268-15.48-5.704-7.987zm-2.53 2.381-3.267 3.734.227-3.298zm5.06 0 3.04.434.227 3.3zM16 6.52 20.797 12h-9.594zM8.295 8.707 8.066 12H5.943zm15.41.002L26.057 12h-2.123zM6.175 14h2.208l3.09 6.182zm4.444 0h10.762L16 24.764zm12.998 0h2.207l-5.297 6.182z" />
      </G>
    </Svg>
  );
};