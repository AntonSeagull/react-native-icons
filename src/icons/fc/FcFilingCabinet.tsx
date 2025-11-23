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

export const FcFilingCabinet = (props: IconProps) => {
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
        <Path fill="#263238" d="M12 44h4v2h-4zM32 44h4v2h-4z" />
        <Path fill="#607D8B" d="M8 41V7c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4" />
        <Path fill="#B0BEC5" d="M12 17V8c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v9zM12 19h24v10H12zM12 40v-9h24v9c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1" />
        <Path fill="#546E7A" d="M20 11h8v2h-8zM20 23h8v2h-8zM20 35h8v2h-8z" />
      </G>
    </Svg>
  );
};