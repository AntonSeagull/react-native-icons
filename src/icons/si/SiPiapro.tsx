

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPiapro = (props: IconProps) => {

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
          <Path  d="M11.988 0c-4.705 0-8.7 3.492-9.351 8.168-.06.207-.09.444-.09.68V24l5.21-3.403V9.44c0-2.338 1.893-4.261 4.231-4.261s4.261 1.894 4.261 4.232c0 2.337-1.894 4.261-4.231 4.261-.77 0-1.54-.207-2.22-.621v5.563A9.45 9.45 0 0 0 21.191 11.6C22.405 6.51 19.268 1.45 14.207.266A9.48 9.48 0 0 0 11.988 0Z" />
        </G>
      </Svg>
    );
  }

