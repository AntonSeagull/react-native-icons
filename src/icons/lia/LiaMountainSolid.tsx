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

export const LiaMountainSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m17.012 3.021-.912 1.66-6.522 11.856-1.916-1.916-.66 1.098-5.86 9.767L.235 27h31.284l-.598-1.395-3-7-.582-1.357-2.068 2.068-7.403-14.605zm-.073 4.282 3.04 5.996-.774.664-2.28-1.953-2.279 1.953-.93-.799zm-.013 7.34 2.28 1.953 1.702-1.46 3.2 6.315.622 1.233 1.932-1.932L28.482 25H3.766q2.146-3.578 4.293-7.154l1.988 1.988.642-1.166q1.022-1.857 2.043-3.713l1.914 1.64z" />
      </G>
    </Svg>
  );
};