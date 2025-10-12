

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStarOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  fill="none" d="M12.606 16.805 12 16.343l-.606.462L5.755 21.1l2.381-6.35.263-.701-.599-.45L3 10h6.72l.229-.684L12 3.162l2.051 6.154.228.684H21l-4.8 3.6-.6.45.264.701 2.38 6.35-5.638-4.296Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

