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

export const PiGradientBold = (props: IconProps) => {
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
        <Path d="M20 108a12 12 0 0 1 12-12h76a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m204-12h-76a12 12 0 0 0 0 24h76a12 12 0 0 0 0-24M68 136H32a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24m156 0h-36a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24M96 148a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24h-40a12 12 0 0 0-12 12m-44 28H32a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m56 0H92a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m56 0h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m60 0h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24M32 80h192a12 12 0 0 0 0-24H32a12 12 0 0 0 0 24" />
      </G>
    </Svg>
  );
};