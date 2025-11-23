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

export const CiHeadphones = (props: IconProps) => {
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
        <Path d="M12.23 3.065h-.46a8.21 8.21 0 0 0-8.2 8.2v6.25a3.39 3.39 0 0 0 .89 2.3 3.42 3.42 0 0 0 2.53 1.12h.53a1.225 1.225 0 0 0 1.22-1.22v-4.4A1.225 1.225 0 0 0 7.52 14.1h-.41a3.6 3.6 0 0 0-2.54 1.05v-3.88a7.21 7.21 0 0 1 7.2-7.2h.46a7.21 7.21 0 0 1 7.2 7.2v3.88a3.6 3.6 0 0 0-2.54-1.05h-.41a1.225 1.225 0 0 0-1.22 1.22v4.4a1.225 1.225 0 0 0 1.22 1.22h.53a3.42 3.42 0 0 0 2.53-1.12 3.39 3.39 0 0 0 .89-2.3v-6.25a8.21 8.21 0 0 0-8.2-8.205m-7.65 14.21A2.51 2.51 0 0 1 7.11 15.1h.41a.22.22 0 0 1 .22.22v4.4a.22.22 0 0 1-.22.22h-.53a2.42 2.42 0 0 1-1.79-.79 2.32 2.32 0 0 1-.63-1.63 2 2 0 0 1 .01-.245m14.22 1.87a2.42 2.42 0 0 1-1.79.79h-.53a.22.22 0 0 1-.22-.22v-4.4a.22.22 0 0 1 .22-.22h.41a2.51 2.51 0 0 1 2.53 2.18 2 2 0 0 1 .01.24 2.32 2.32 0 0 1-.63 1.63" />
      </G>
    </Svg>
  );
};