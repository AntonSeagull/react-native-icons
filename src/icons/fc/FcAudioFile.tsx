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

export const FcAudioFile = (props: IconProps) => {
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
        <Path fill="none" d="M204 0h48v48h-48z" />
        <Path fill="#90CAF9" d="M244 45h-32V3h22l10 10z" />
        <Path fill="#E1F5FE" d="M242.5 14H233V4.5z" />
        <Circle cx={227} cy={30} r={4} />
        <Path d="m234 21-5-2v11h2v-7.1l3 1.1z" />
        <Path fill="#90CAF9" d="M40 45H8V3h22l10 10z" />
        <Path fill="#E1F5FE" d="M38.5 14H29V4.5z" />
        <Circle cx={23} cy={30} r={4} />
        <Path d="m30 21-5-2v11h2v-7.1l3 1.1z" />
      </G>
    </Svg>
  );
};