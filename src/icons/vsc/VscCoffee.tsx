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

export const VscCoffee = (props: IconProps) => {
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
        <Path d="M3 1v.5c0 .47.274.706.8 1.1l.04.03C4.314 2.985 5 3.498 5 4.5V5H4v-.5c0-.47-.274-.706-.8-1.1l-.04-.03C2.686 3.015 2 2.502 2 1.5V1zM6 1v.5c0 .47.274.706.8 1.1l.04.03C7.314 2.985 8 3.498 8 4.5V5H7v-.5c0-.47-.274-.706-.8-1.1l-.04-.03C5.686 3.015 5 2.502 5 1.5V1zM9 1v.5c0 .47.274.706.8 1.1l.04.03c.474.355 1.16.868 1.16 1.87V5h-1v-.5c0-.47-.274-.706-.8-1.1l-.04-.03C8.686 3.015 8 2.502 8 1.5V1z" />
        <Path fillRule="evenodd" d="m2 7 1-1h10.5a2.5 2.5 0 0 1 0 5h-.626A4 4 0 0 1 9 14H6a4 4 0 0 1-4-4zm10 3V7H3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3m1-3v3h.5a1.5 1.5 0 0 0 0-3z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};