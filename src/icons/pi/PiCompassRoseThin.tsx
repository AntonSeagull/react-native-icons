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

export const PiCompassRoseThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m249 124.12-29.68-7.42a91.84 91.84 0 0 0-80-80L131.88 7a4 4 0 0 0-7.76 0l-7.42 29.71a91.84 91.84 0 0 0-80 80L7 124.12a4 4 0 0 0 0 7.76l29.68 7.42a91.84 91.84 0 0 0 80 80l7.44 29.7a4 4 0 0 0 7.76 0l7.42-29.68a91.84 91.84 0 0 0 80-80l29.7-7.44a4 4 0 0 0 0-7.76m-38.05-9.51L155.3 100.7l-13.91-55.62a83.85 83.85 0 0 1 69.53 69.53ZM128 24.49l19.57 78.28L128 122.34l-19.57-19.57Zm-13.39 20.59L100.7 100.7l-55.62 13.91a83.85 83.85 0 0 1 69.53-69.53m-11.84 63.35L122.34 128l-19.57 19.57L24.49 128Zm-57.69 33 55.62 13.87 13.91 55.62a83.85 83.85 0 0 1-69.53-69.53ZM128 231.51l-19.57-78.28L128 133.66l19.57 19.57Zm13.39-20.59 13.91-55.62 55.62-13.91a83.85 83.85 0 0 1-69.53 69.53m11.84-63.35L133.66 128l19.57-19.57L231.51 128Z" />
      </G>
    </Svg>
  );
};