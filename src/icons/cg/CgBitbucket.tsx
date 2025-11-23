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

export const CgBitbucket = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M4.583 4.635c-.552 0-.915.44-.811.982l2.456 12.766c.104.542.637.982 1.189.982h9.166c.552 0 1.085-.44 1.189-.982l2.456-12.766c.104-.542-.259-.982-.811-.982zm8.962 9.73.91-4.73h-4.91l.91 4.73z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};