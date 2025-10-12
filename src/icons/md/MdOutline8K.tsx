

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutline8K = (props: IconProps) => {

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
          <Path  d="M7.5,15H10c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H7.5c-0.55,0-1,0.45-1,1v4C6.5,14.55,6.95,15,7.5,15z M8,10h1.5v1.5H8 V10z M8,12.5h1.5V14H8V12.5z" />
          <Path  d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
        </G>
      </Svg>
    );
  }

