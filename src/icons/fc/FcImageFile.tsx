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

export const FcImageFile = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#90CAF9" d="M40 45H8V3h22l10 10z" />
        <Path fill="#E1F5FE" d="M38.5 14H29V4.5z" />
        <Path fill="#1565C0" d="m21 23-7 10h14z" />
        <Path fill="#1976D2" d="M28 26.4 23 33h10z" />
        <Circle cx={31.5} cy={24.5} r={1.5} fill="#1976D2" />
      </G>
    </Svg>
  );
};