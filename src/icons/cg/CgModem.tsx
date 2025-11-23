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

export const CgModem = (props: IconProps) => {
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
        <Path fill="currentColor" d="M18 16.634a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M5.866 3.134a1 1 0 1 0-1 1.732l13.455 7.768H2v4a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4zM20 14.634H4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};