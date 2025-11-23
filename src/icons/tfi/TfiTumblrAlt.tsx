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

export const TfiTumblrAlt = (props: IconProps) => {
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
        <Path d="M9.104.5v4.042h3.793v2.51H9.104v4.104c0 .927.042 1.521.146 1.792.094.261.281.468.541.625.354.218.761.323 1.219.323.813 0 1.615-.261 2.417-.793v2.521c-.688.323-1.302.552-1.854.678a7.6 7.6 0 0 1-1.803.197q-1.093 0-1.938-.281a4.15 4.15 0 0 1-1.437-.781c-.395-.343-.676-.708-.822-1.093-.156-.386-.229-.947-.229-1.677V7.052H3.573V4.791a4.9 4.9 0 0 0 1.614-.874 4.5 4.5 0 0 0 1.074-1.375C6.531 2 6.719 1.323 6.823.5z" />
      </G>
    </Svg>
  );
};