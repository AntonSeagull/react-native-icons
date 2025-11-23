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

export const PiGoogleCardboardLogoLight = (props: IconProps) => {
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
        <Path d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h64a6 6 0 0 0 4.24-1.76l26.35-26.34a2 2 0 0 1 2.82 0l26.35 26.34A6 6 0 0 0 160 206h64a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2h-61.51l-24.59-24.58a14 14 0 0 0-19.8 0L93.51 194H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM80 98a30 30 0 1 0 30 30 30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18m96-48a30 30 0 1 0 30 30 30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18" />
      </G>
    </Svg>
  );
};