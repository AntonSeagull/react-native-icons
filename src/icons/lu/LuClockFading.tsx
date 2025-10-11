

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuClockFading = (props: IconProps) => {

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
          <Path d="M12 2a10 10 0 0 1 7.38 16.75" />
          <Path d="M12 6v6l4 2" />
          <Path d="M2.5 8.875a10 10 0 0 0-.5 3" />
          <Path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
          <Path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
          <Path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
        </G>
      </Svg>
    );
  }

