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

export const RxLetterCaseUppercase = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M3.626 2.75a.5.5 0 0 1 .468.327l3.076 8.32a.5.5 0 0 1-.938.346L5.224 9.016H2.027L1.02 11.743a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .469-.326m0 1.942L4.91 8.166H2.34zm7.746-1.942a.5.5 0 0 1 .469.327l3.075 8.32a.5.5 0 1 1-.938.346L12.97 9.016H9.773l-1.008 2.727a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .469-.326m0 1.942 1.284 3.474h-2.568z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};