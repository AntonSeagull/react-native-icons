

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStatusGoodSmall = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 12 12"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 6, 6)`}
      >
        <G fill={color} stroke={color}>
          <Circle  cx="6" cy="6" r="5" fillRule="evenodd" />
        </G>
      </Svg>
    );
  }

