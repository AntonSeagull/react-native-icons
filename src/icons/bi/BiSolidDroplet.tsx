

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidDroplet = (props: IconProps) => {

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
          <Path  d="M12.6 2.4c-.4-.3-.9-.3-1.2 0C9.5 3.9 4 8.5 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5.4-5.5-10.1-7.4-11.6" />
        </G>
      </Svg>
    );
  }

