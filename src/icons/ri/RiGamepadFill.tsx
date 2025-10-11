

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiGamepadFill = (props: IconProps) => {

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
          <Path  d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z" />
        </G>
      </Svg>
    );
  }

