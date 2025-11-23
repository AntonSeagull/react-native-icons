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

export const TfiPackage = (props: IconProps) => {
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
        <Path d="M8.517-.035 0 3.186v10.693l8.5 3.188 8.5-3.188V3.187zm6.567 3.563-2.586.97-6.557-2.489 2.575-.974zM8.5 5.997 1.919 3.529l2.609-.986 6.551 2.487zM1 4.253l7 2.625v8.932l-7-2.625zM9 15.81V6.878l7-2.625v8.932z" />
      </G>
    </Svg>
  );
};