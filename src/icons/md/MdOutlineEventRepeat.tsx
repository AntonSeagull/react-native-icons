

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineEventRepeat = (props: IconProps) => {

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
          <Path  d="M21,12V6c0-1.1-0.9-2-2-2h-1V2h-2v2H8V2H6v2H5C3.9,4,3,4.9,3,6v14c0,1.1,0.9,2,2,2h7v-2H5V10h14v2H21z M19,8H5V6h14V8z M15.64,20c0.43,1.45,1.77,2.5,3.36,2.5c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-0.95,0-1.82,0.38-2.45,1l1.45,0V18h-4v-4h1.5 l0,1.43C16.4,14.55,17.64,14,19,14c2.76,0,5,2.24,5,5s-2.24,5-5,5c-2.42,0-4.44-1.72-4.9-4L15.64,20z" />
        </G>
      </Svg>
    );
  }

