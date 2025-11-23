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

export const VscBellSlashDot = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M8.617 1.045c-.335.28-.628.607-.87.97-.34.02-.68.086-1.01.196a3.9 3.9 0 0 0-1.435.838c-.419.37-.742.825-.97 1.34a3.9 3.9 0 0 0-.346 1.615v2.2c0 .616-.071 1.23-.206 1.834L2.268 11.55l.33-.977a7.6 7.6 0 0 0 .383-2.368V6.004c0-.706.156-1.388.43-2.022A4.9 4.9 0 0 1 4.62 2.307a4.8 4.8 0 0 1 1.795-1.053 4.9 4.9 0 0 1 2.202-.21m4.397 7.694a4.5 4.5 0 0 1-.991.231c.058.656.193 1.307.41 1.938l.37 1.113H6.318l-.98.981h.646c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586s1.04-.215 1.411-.586.587-.886.587-1.412h3.505l.478-.658-.586-1.77a7.7 7.7 0 0 1-.363-1.835m-4.326 4.98a1 1 0 0 1-.706.3 1 1 0 0 1-.706-.3 1 1 0 0 1-.3-.705h1.999a.94.94 0 0 1-.287.706M15.249 1.666a4 4 0 0 0-.682-.733l.575-.575.707.707zM8.933 6.567 1 14.5l.707.707L9.666 7.25a4 4 0 0 1-.733-.682" clipRule="evenodd" />
        <Path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </G>
    </Svg>
  );
};