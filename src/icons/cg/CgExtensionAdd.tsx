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

export const CgExtensionAdd = (props: IconProps) => {
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
        <Path fill="currentColor" d="M16 4h2v2h2v2h-2v2h-2V8h-2V6h2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 12V6H4v14h14v-8zM6 8h4v4H6zm4 6v4H6v-4zm6 0v4h-4v-4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};