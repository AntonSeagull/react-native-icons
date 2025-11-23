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

export const TiSocialVimeoCircular = (props: IconProps) => {
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
        <Path d="M14.463 9.141q-.768 0-1.43.715-.467.467-.566 1.101.31-.196.541-.196.238 0 .393.212.299.417-.033 1.051-.735 1.4-1.066 1.4-.233 0-.602-1.567a6 6 0 0 1-.133-.667 15 15 0 0 0-.133-.75q-.067-.317-.2-.649c-.133-.332-.2-.384-.333-.483a.54.54 0 0 0-.327-.104l-.173.021q-.434.1-1 .534a7 7 0 0 0-.934.833l-.334.4.301.399.166-.133q.1-.068.367-.167l.191-.043q.103 0 .143.076.099.133.615 1.884.518 1.75.65 2.017.234.466.633.717.194.12.427.121.248 0 .54-.139.9-.599 2.067-2 1.167-1.4 1.433-2.966.234-1.367-.799-1.567a1.6 1.6 0 0 0-.404-.05M12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9m0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7" />
      </G>
    </Svg>
  );
};