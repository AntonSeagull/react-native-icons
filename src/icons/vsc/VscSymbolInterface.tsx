

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSymbolInterface = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11.496 4a3.49 3.49 0 0 0-3.46 3h-3.1a2 2 0 1 0 0 1h3.1a3.5 3.5 0 1 0 3.46-4zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </G>
      </Svg>
    );
  }

