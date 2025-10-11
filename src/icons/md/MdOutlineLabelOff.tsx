

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineLabelOff = (props: IconProps) => {

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
          <Path  d="M0 0h24v24H0V0z" fill="none" />
          <Path  d="M16 7l3.55 5-1.63 2.29 1.43 1.43L22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5l-7.37.01 2 1.99H16zM2 4.03l1.58 1.58C3.22 5.96 3 6.46 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.28 0 .55-.07.79-.18L18.97 21l1.41-1.41L3.41 2.62 2 4.03zM14.97 17H5V7.03L14.97 17z" />
        </G>
      </Svg>
    );
  }

