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

export const FcComboChart = (props: IconProps) => {
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
        <Path d="M37 18h6v24h-6zM29 26h6v16h-6zM21 22h6v20h-6zM13 32h6v10h-6zM5 28h6v14H5z" />
        <Circle cx={8} cy={16} r={3} />
        <Circle cx={16} cy={18} r={3} />
        <Circle cx={24} cy={11} r={3} />
        <Circle cx={32} cy={13} r={3} />
        <Circle cx={40} cy={9} r={3} />
        <Path d="m39.1 7.2-7.3 3.7-8.3-2.1-8 7-7-1.7-1 3.8 9 2.3 8-7 7.7 1.9 8.7-4.3z" />
      </G>
    </Svg>
  );
};