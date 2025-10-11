

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFlower = (props: IconProps) => {

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
          <Path  d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
          <Path  d="M12 7.5V9" />
          <Path  d="M7.5 12H9" />
          <Path  d="M16.5 12H15" />
          <Path  d="M12 16.5V15" />
          <Path  d="m8 8 1.88 1.88" />
          <Path  d="M14.12 9.88 16 8" />
          <Path  d="m8 16 1.88-1.88" />
          <Path  d="M14.12 14.12 16 16" />
        </G>
      </Svg>
    );
  }

