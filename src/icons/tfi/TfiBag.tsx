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

export const TfiBag = (props: IconProps) => {
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
        <Path d="M13 4V1.606C13 .721 12.263 0 11.357 0H5.658c-.905 0-1.642.721-1.642 1.606V4H1v13h15V4zM5.016 1.606c0-.334.288-.606.642-.606h5.699c.355 0 .643.272.643.606V4H5.016zM15 16H2V8h13zm0-9H2V5h2.016v.643h1V5H12v.643h1V5h2z" />
      </G>
    </Svg>
  );
};