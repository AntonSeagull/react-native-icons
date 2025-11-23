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

export const TbBrandKickstarter = (props: IconProps) => {
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
        <Path d="m11 9 2.975-4.65Q14.895 3 16.352 3q1.185 0 2.054.858.865.859.866 2.054 0 .883-.46 1.559L16 11.5l3.465 4.912q.535.692.535 1.613a2.92 2.92 0 0 1-.843 2.098q-.842.877-2.04.877-1.316 0-2-.87l-4.112-5.697V17.5c0 .876-.313 1.69-.611 2.175C9.851 20.558 9.044 21 8.005 21c-.944 0-1.753-.327-2.271-.974q-.729-.899-.729-2.38V6.275q0-1.402.74-2.313C6.257 3.321 7.092 3 8.005 3c.868 0 1.821.321 2.4.962.323.356.515.714.6 1.08.052.224 0 .643 0 1.26V9z" />
      </G>
    </Svg>
  );
};