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

export const VscLightbulbAutofix = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m1.31 5L12 13l-1.3 1 .5-1.53-1.2-.83h1.47L12 10l.54 1.64H14l-1.2.83z" />
        <Path fillRule="evenodd" d="M11.17 8.085A3.98 3.98 0 0 0 8.288 10.5H6.409v2.201q-.001.12.09.212a.3.3 0 0 0 .213.09h1.413c.089.348.223.678.396.982q-.1.015-.203.015H6.712a1.29 1.29 0 0 1-.922-.379 1.3 1.3 0 0 1-.38-.92v-1.6q0-.718-.274-1.329a3.6 3.6 0 0 0-.776-1.114 4.7 4.7 0 0 1-1.006-1.437A4.2 4.2 0 0 1 3 5.5a4.43 4.43 0 0 1 .616-2.27q.296-.504.705-.914a4.6 4.6 0 0 1 .911-.702q.508-.294 1.084-.454a4.5 4.5 0 0 1 1.2-.16 4.5 4.5 0 0 1 2.276.614 4.5 4.5 0 0 1 1.622 1.616 4.44 4.44 0 0 1 .616 2.27q0 .926-.353 1.721a4.5 4.5 0 0 1-.506.864z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};