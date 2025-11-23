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

export const CiCloudMoon = (props: IconProps) => {
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
        <Path d="M21.36 11.54a.71.71 0 0 0-.73-.29 5.278 5.278 0 0 1-6.34-4.78 5.4 5.4 0 0 1 .37-2.42.73.73 0 0 0-.15-.78.7.7 0 0 0-.76-.16 6.32 6.32 0 0 0-3.98 5.88 5.5 5.5 0 0 0-1.22-.13 6.04 6.04 0 0 0-6.05 6.03c0 .1.01.2.01.3a6.114 6.114 0 0 0 6.19 5.75h5.99a3.94 3.94 0 0 0 3.98-3.61 3.76 3.76 0 0 0-.63-2.38 6.28 6.28 0 0 0 3.36-2.65.68.68 0 0 0-.04-.76m-6.67 8.4H8.7a5.12 5.12 0 0 1-5.19-4.8 5.04 5.04 0 0 1 5.04-5.28 5.06 5.06 0 0 1 4.92 3.95.55.55 0 0 0 .26.37l.25.13.2-.05a2.873 2.873 0 0 1 3.49 3 2.93 2.93 0 0 1-2.98 2.68m2.61-5.83a3.92 3.92 0 0 0-2.95-.89 6.04 6.04 0 0 0-3.57-3.92 5.34 5.34 0 0 1 2.73-4.98 6.325 6.325 0 0 0 4.51 7.85 6.6 6.6 0 0 0 2.12.17 5.2 5.2 0 0 1-2.84 1.77" data-name="Cloud Moon" />
      </G>
    </Svg>
  );
};