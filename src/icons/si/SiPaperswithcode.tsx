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

export const SiPaperswithcode = (props: IconProps) => {
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
        <Path d="M0 2v20h4.4v-2.4h-2V4.4h2V2zm19.6 0v2.4h2v15.2h-2V22H24V2zm-16 3.6v12.8H6V5.6zm7.2 0v12.8h2.4V5.6zm7.2 0v12.8h2.4V5.6zm-10.8.8v11.2h2.4V6.4zm7.2 0v11.2h2.4V6.4z" />
      </G>
    </Svg>
  );
};