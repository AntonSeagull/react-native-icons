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

export const TfiEmail = (props: IconProps) => {
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
        <Path d="M0 2v13h17V2zm8.494 7.817L1.598 3h13.82zM5.755 8.516 1 13.198V3.815zm.711.703 2.026 2.003 1.996-1.966 4.8 4.744H1.611zm4.735-.664L16 3.83v9.467z" />
      </G>
    </Svg>
  );
};