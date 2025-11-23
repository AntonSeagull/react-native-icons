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

export const TfiMarkerAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m15.664 5.684-.544-.544c.078-.179.127-.368.139-.562a1.45 1.45 0 0 0-.416-1.13l-1.745-1.745q-.31-.31-.687-.31c-.449 0-.769.323-1.108.666l-9.036 9.036-.335 2.955.105.104-.972.972 1.193.222.487-.486.104.104 2.954-.333L14.5 5.935l.456.456a.25.25 0 0 1 .076.245c-.026.141-.129.31-.283.464l-3.016 3.017.707.707 3.016-3.017c.303-.302.497-.645.56-.99a1.24 1.24 0 0 0-.352-1.133M5.343 13.677l-2.128.241-.235-.235.242-2.126 5.622-5.622 2.121 2.121zm6.329-6.328L9.551 5.228l2.464-2.464c.136-.139.342-.347.376-.354l1.745 1.745c.12.12.129.278.125.361a.72.72 0 0 1-.218.462z" />
      </G>
    </Svg>
  );
};