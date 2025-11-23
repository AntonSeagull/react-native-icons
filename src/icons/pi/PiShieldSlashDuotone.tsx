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

export const PiShieldSlashDuotone = (props: IconProps) => {
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
        <Path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M53.92 34.62A8 8 0 0 0 40.26 42 16 16 0 0 0 32 56v56c0 52.72 25.52 84.67 46.93 102.19 23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1.36-.37 31.27-8.78 57.09-34.72l14.89 16.38a8 8 0 1 0 11.84-10.76Zm74.07 189a128.5 128.5 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h3.71l124.7 137.15A129.26 129.26 0 0 1 128 223.62ZM224 56v56c0 20.58-3.89 39.61-11.56 56.59a8 8 0 1 1-14.58-6.59c6.73-14.89 10.14-31.71 10.14-50V56H98.52a8 8 0 1 1 0-16H208a16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};