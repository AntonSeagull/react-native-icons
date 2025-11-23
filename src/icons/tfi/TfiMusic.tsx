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

export const TfiMusic = (props: IconProps) => {
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
        <Path d="m14.765 4.459.421-.906L8 .217v9.878a2.89 2.89 0 0 0-1.898-.722c-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914 2.914-1.308 2.914-2.914c0-.053-.013-.103-.016-.154V1.783zm-8.663 9.742c-1.056 0-1.914-.858-1.914-1.914s.858-1.914 1.914-1.914 1.914.858 1.914 1.914-.859 1.914-1.914 1.914" />
      </G>
    </Svg>
  );
};