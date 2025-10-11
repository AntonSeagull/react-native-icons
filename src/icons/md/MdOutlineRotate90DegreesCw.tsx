

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineRotate90DegreesCw = (props: IconProps) => {

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
          <Path  d="M2,13c0,4.97,4.03,9,9,9c1.76,0,3.4-0.51,4.79-1.38l-1.46-1.46C13.34,19.69,12.2,20,11,20c-3.86,0-7-3.14-7-7s3.14-7,7-7 h0.17L9.59,7.59L11,9l4-4l-4-4L9.58,2.41L11.17,4H11C6.03,4,2,8.03,2,13z M11,13l6,6l6-6l-6-6L11,13z M17,16.17L13.83,13L17,9.83 L20.17,13L17,16.17z" />
        </G>
      </Svg>
    );
  }

