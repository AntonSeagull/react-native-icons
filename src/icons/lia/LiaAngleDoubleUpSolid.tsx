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

export const LiaAngleDoubleUpSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 4.688 3.781 16.906l1.438 1.407L16 7.53l10.781 10.782 1.438-1.407Zm0 7L3.781 23.906l1.438 1.407L16 14.53l10.781 10.782 1.438-1.407Z" />
      </G>
    </Svg>
  );
};