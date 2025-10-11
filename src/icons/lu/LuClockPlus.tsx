

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuClockPlus = (props: IconProps) => {

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
          <Path  d="M12 6v6l3.644 1.822" />
          <Path  d="M16 19h6" />
          <Path  d="M19 16v6" />
          <Path  d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />
        </G>
      </Svg>
    );
  }

