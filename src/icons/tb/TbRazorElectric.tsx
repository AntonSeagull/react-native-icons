

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRazorElectric = (props: IconProps) => {

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
          <Path  d="M8 3v2" />
          <Path  d="M12 3v2" />
          <Path  d="M16 3v2" />
          <Path  d="M9 12v6a3 3 0 0 0 6 0v-6h-6z" />
          <Path  d="M8 5h8l-1 4h-6z" />
          <Path  d="M12 17v1" />
        </G>
      </Svg>
    );
  }

