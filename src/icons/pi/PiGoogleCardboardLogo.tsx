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

export const PiGoogleCardboardLogo = (props: IconProps) => {
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
        <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a8 8 0 0 0 5.66-2.34L128 179.31l26.34 26.35A8 8 0 0 0 160 208h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-60.69l-24-24a16 16 0 0 0-22.62 0l-24 24H32V64h192ZM80 160a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16m96 48a32 32 0 1 0-32-32 32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16" />
      </G>
    </Svg>
  );
};