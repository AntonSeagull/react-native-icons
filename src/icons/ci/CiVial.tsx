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

export const CiVial = (props: IconProps) => {
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
        <Path d="m20.779 9.441-.48-.47-5.26-5.271-.48-.48a.5.5 0 0 0-.7 0 .5.5 0 0 0 0 .71l.47.48-10.17 10.171a3.694 3.694 0 0 0 0 5.22l.04.04a3.706 3.706 0 0 0 5.23 0L19.6 9.671l.47.48a.52.52 0 0 0 .71 0 .513.513 0 0 0-.001-.71m-12.06 9.69a2.7 2.7 0 0 1-3.81 0l-.04-.04a2.7 2.7 0 0 1 0-3.81l1.7-1.7h7.71Zm6.56-6.55h-7.71l7.47-7.46 3.85 3.85Z" />
      </G>
    </Svg>
  );
};