

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidMessageRoundedEdit = (props: IconProps) => {

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
          <Path  d="M12 2C6.486 2 2 5.589 2 10c0 2.907 1.897 5.516 5 6.934V22l5.34-4.005C17.697 17.854 22 14.32 22 10c0-4.411-4.486-8-10-8zM9.302 13.986H7.503v-1.798l4.976-4.97 1.798 1.799-4.975 4.969zm5.823-5.816-1.799-1.798 1.372-1.371 1.799 1.798-1.372 1.371z" />
        </G>
      </Svg>
    );
  }

