

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuClockPlus = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 6v6l3.644 1.822" />
          <Path d="M16 19h6" />
          <Path d="M19 16v6" />
          <Path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />
        </G>
      </Svg>
    );
  }

