

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdEditDocument = (props: IconProps) => {

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
          <Path  d="M20,8l-6-6H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H12v-2.95l8-8V8z M13,9V3.5L18.5,9H13z" />
          <Path  d="M22.71,14L22,13.29c-0.39-0.39-1.02-0.39-1.41,0L19.88,14L22,16.12l0.71-0.71C23.1,15.02,23.1,14.39,22.71,14z" />
        </G>
      </Svg>
    );
  }

