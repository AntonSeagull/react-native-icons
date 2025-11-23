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

export const TfiCloud = (props: IconProps) => {
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
        <Path d="M12.75 4.5c-.578 0-1.146.123-1.691.367A4.73 4.73 0 0 0 7.75 3.5a4.7 4.7 0 0 0-4.397 3.002C1.55 6.428 0 7.923 0 9.75A3.254 3.254 0 0 0 3.25 13h9.5C15.093 13 17 11.093 17 8.75S15.093 4.5 12.75 4.5m0 7.5h-9.5C2.009 12 1 10.991 1 9.75S2.009 7.5 3.25 7.5c.125 0 .244.019.363.038l.435.072.126-.422C4.652 5.58 6.089 4.5 7.75 4.5c1.073 0 2.102.477 2.821 1.307l.265.306.354-.195a3.2 3.2 0 0 1 1.56-.418C14.542 5.5 16 6.958 16 8.75S14.542 12 12.75 12" />
      </G>
    </Svg>
  );
};