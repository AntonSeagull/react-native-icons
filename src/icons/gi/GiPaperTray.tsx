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

export const GiPaperTray = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M87.902 40.998 42.25 391.002h138.566l32 48h86.368l32-48h138.568L424.098 40.998h-98.536l-16 32H202.587l-16.967-32zm-46.904 368v78.004h430.004v-78.004H340.816l-32 48H203.184l-32-48z" />
      </G>
    </Svg>
  );
};