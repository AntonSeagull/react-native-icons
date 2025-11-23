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

export const HiMiniInboxStack = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M1.045 6.954a2.8 2.8 0 0 1 .217-.678L2.53 3.58A2.75 2.75 0 0 1 5.019 2h9.962a2.75 2.75 0 0 1 2.488 1.58l1.27 2.696q.152.325.216.678A1 1 0 0 1 19 7.25v1.5a2.75 2.75 0 0 1-2.75 2.75H3.75A2.75 2.75 0 0 1 1 8.75v-1.5a1 1 0 0 1 .045-.296m2.843-2.736A1.25 1.25 0 0 1 5.02 3.5h9.962c.484 0 .925.28 1.13.718l.957 2.032H14a1 1 0 0 0-.86.49l-.606 1.02a1 1 0 0 1-.86.49H8.236a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 6 6.25H2.932z" clipRule="evenodd" />
        <Path d="M1 14a1 1 0 0 1 1-1h4a1 1 0 0 1 .894.553l.448.894a1 1 0 0 0 .894.553h3.438a1 1 0 0 0 .86-.49l.606-1.02A1 1 0 0 1 14 13h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z" />
      </G>
    </Svg>
  );
};