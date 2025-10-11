

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdNoDrinks = (props: IconProps) => {

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
          <Path  d="M5.83,3H21v2l-6.2,6.97L9.83,7h6.74l1.78-2H7.83L5.83,3z M19.78,22.61L18,20.83V21H6v-2h5v-5l-1.37-1.54L1.39,4.22 l1.41-1.41L3,3l18.19,18.19L19.78,22.61z M16.17,19L13,15.83V19H16.17z" />
        </G>
      </Svg>
    );
  }

