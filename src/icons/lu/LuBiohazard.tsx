

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBiohazard = (props: IconProps) => {

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
          <Path  d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
          <Path  d="m8.9 10.1 1.4.8" />
          <Path  d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
          <Path  d="m15.1 10.1-1.4.8" />
          <Path  d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
          <Path  d="M12 13.9v1.6" />
          <Path  d="M13.5 5.4c-1-.2-2-.2-3 0" />
          <Path  d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
          <Path  d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
        </G>
      </Svg>
    );
  }

