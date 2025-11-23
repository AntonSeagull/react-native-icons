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

export const SiSunrise = (props: IconProps) => {
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
        <Path d="M12.001 0A12 12 0 1 0 24 11.999 12.01 12.01 0 0 0 12.001 0m0 2.464a9.53 9.53 0 0 1 9.514 8.889 9.5 9.5 0 0 1-.863 4.649H3.35a9.53 9.53 0 0 1 .616-9.14 9.53 9.53 0 0 1 8.036-4.398" />
      </G>
    </Svg>
  );
};