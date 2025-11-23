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

export const GiAbstract050 = (props: IconProps) => {
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
        <Path d="M21 21v135.125h135.125V21zm167.438 0v135.125h135.125V21zm167.437 0v135.125H491V21zM21 188.438v135.125h135.125V188.438zm167.438 0v135.125h135.125V188.438zm167.437 0v135.125H491V188.438zM21 355.875V491h135.125V355.875zm167.438 0V491h135.125V355.875zm167.437 0V491H491V355.875z" />
      </G>
    </Svg>
  );
};