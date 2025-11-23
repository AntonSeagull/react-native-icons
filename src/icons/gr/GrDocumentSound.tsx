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

export const GrDocumentSound = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M2.998 9V1H17.5L21 4.5V23h-3M16 1v5h5M1 14.01v4h3l4 3V11l-4 3.01zM11 18a2 2 0 1 0 0-4m0 8a6 6 0 1 0 0-12" />
      </G>
    </Svg>
  );
};