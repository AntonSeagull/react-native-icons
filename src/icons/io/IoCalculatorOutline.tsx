

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCalculatorOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Circle  cx="168" cy="248" r="24" />
          <Circle  cx="256" cy="248" r="24" />
          <Circle  cx="344" cy="248" r="24" />
          <Circle  cx="168" cy="328" r="24" />
          <Circle  cx="256" cy="328" r="24" />
          <Circle  cx="168" cy="408" r="24" />
          <Circle  cx="256" cy="408" r="24" />
        </G>
      </Svg>
    );
  }

