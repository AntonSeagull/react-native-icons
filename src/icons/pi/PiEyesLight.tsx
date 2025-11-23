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

export const PiEyesLight = (props: IconProps) => {
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
        <Path d="M176 34c-21.15 0-39.1 20.15-48 50.26C119.1 54.15 101.15 34 80 34c-30.28 0-54 41.29-54 94s23.72 94 54 94c21.15 0 39.1-20.15 48-50.26 8.9 30.11 26.85 50.26 48 50.26 30.28 0 54-41.29 54-94s-23.72-94-54-94M80 210c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C45.81 70.1 61.76 46 80 46c22.77 0 42 37.55 42 82s-19.23 82-42 82m-42-82a18 18 0 1 1 18 18 18 18 0 0 1-18-18m138 82c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C141.81 70.1 157.76 46 176 46c22.77 0 42 37.55 42 82s-19.23 82-42 82m-42-82a18 18 0 1 1 18 18 18 18 0 0 1-18-18" />
      </G>
    </Svg>
  );
};