

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiUnderhand = (props: IconProps) => {

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
          <Path  d="M44.142 366.824c95.92 0 99.81-1.297 99.81-1.297 123.716 201.064 221.662-72.51 234.36-171.483l-36.24-.158 70.897-123.76 68.082 123.38-35.26 1.454c-81.335 283.797-299.33 296.3-401.65 171.864z" />
        </G>
      </Svg>
    );
  }

