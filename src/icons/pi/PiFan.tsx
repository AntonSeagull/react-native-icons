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

export const PiFan = (props: IconProps) => {
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
        <Path d="M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68 60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32 60 60 0 0 0 44.42 60.66 60.5 60.5 0 0 0 15.62 2.07 60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-121-7a16 16 0 1 1 16 16 16 16 0 0 1-16-16M80 76a44 44 0 0 1 62.75-39.82L127.77 96a32 32 0 0 0-27.92 16.8A43.85 43.85 0 0 1 80 76m27 119.57a44 44 0 0 1-65.86-34.43l59.31-16.94A32 32 0 0 0 128 160h.91A43.82 43.82 0 0 1 107 195.57m106.17-23a43.9 43.9 0 0 1-13 14.14l-44.32-42.89a31.91 31.91 0 0 0-.59-32.57 44 44 0 0 1 57.91 61.32" />
      </G>
    </Svg>
  );
};